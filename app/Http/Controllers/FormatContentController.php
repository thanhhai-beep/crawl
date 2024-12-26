<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Goutte\Client;
use Symfony\Component\DomCrawler\Crawler;
use Weidner\Goutte\GoutteFacade;
use Symfony\Component\HttpClient\HttpClient;
use Response;
use Illuminate\Support\Facades\Http;
use File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class FormatContentController extends Controller

{

    public function index()

    {

        //return view('frontend.view', compact( 'str'));

        return view('crawl');

    }



    public function link_replace_file()

    {

        return view('link_replace_file');

    }

    /*Create directories if they don't exist.*/
    private function createDirectories($path)
    {
        if (!File::exists($path)) {
            File::makeDirectory($path, 0777, true);
        }
    }

    /* Get CSS links from a website.*/
    private function getCssLinks($websiteUrl)
    {
        $client = new Client();
        $crawler = $client->request('GET', $websiteUrl);

        return $crawler->filter('link[rel="stylesheet"]')->each(function ($node) {
            return $node->attr('href');
        });
    }

    /*Download an image from a URL.*/
    private function downloadImage($imageUrl, $savePath)
    {
        try {
            $imageContent = Http::get($imageUrl)->body();
            File::put($savePath, $imageContent);
        } catch (\Exception $e) {
            \Log::error('Failed to download image: ' . $imageUrl);
        }
    }

    /*Get JS links from a website.*/
    private function getJsLinks($websiteUrl)
    {
        $client = new Client();
        $crawler = $client->request('GET', $websiteUrl);

        $jsFiles = $crawler->filter('script[src]')->each(function (Crawler $node) {
            return $node->attr('src');
        });

        // Ensure JS files are absolute URLs
        foreach ($jsFiles as &$jsFile) {
            if (filter_var($jsFile, FILTER_VALIDATE_URL) === false) {
                $jsFile = rtrim($websiteUrl, '/') . '/' . ltrim($jsFile, '/');
            }
        }

        return $jsFiles;
    }

    /*Get image URLs from a website.*/
    private function getImageLinks($websiteUrl)
    {
        $client = new Client();
        $crawler = $client->request('GET', $websiteUrl);

        $imageUrls = $crawler->filter('img[src]')->each(function (Crawler $node) {
            return $node->attr('src');
        });

        // Convert relative URLs to absolute
        foreach ($imageUrls as &$imageUrl) {
            if (filter_var($imageUrl, FILTER_VALIDATE_URL) === false) {
                $imageUrl = rtrim($websiteUrl, '/') . '/' . ltrim($imageUrl, '/');
            }
        }

        return $imageUrls;
    }

    /*Download all assets from a website (CSS, JS, Images).*/
    public function downloadAssets($websiteUrl)
    {
        $folderName = $this->getFolderNameFromUrl($websiteUrl);
        $baseDir = public_path('datawebsite/' . $folderName);
        try {
            $this->downloadFiles($baseDir, $websiteUrl);
            return back()->with('status', 'Assets downloaded successfully but no HTML file found.');
        } catch (\Exception $e) {
            return back()->with('error', 'Something went wrong: ' . $e->getMessage());
        }
    }


    /*Download CSS, JS, and Image files and save them locally.*/
    private function downloadFiles($baseDir, $websiteUrl)
    {
        $cssDir = $baseDir . '/css';
        $this->createDirectories($cssDir);

        $jsDir = $baseDir . '/js';
        $this->createDirectories($jsDir);

        // $imagesDir = $baseDir . '/images';
        // $this->createDirectories($imagesDir);

        // Download CSS files
        $cssFiles = $this->getCssLinks($websiteUrl);
        foreach ($cssFiles as $cssFile) {
            try {
                $cssContent = Http::get($cssFile)->body();
                File::put($cssDir . '/' . basename($cssFile), $cssContent);
            } catch (\Exception $e) {
                \Log::error('Failed to download CSS file: ' . $cssFile);
            }
        }

        // Download JS files
        $jsFiles = $this->getJsLinks($websiteUrl);
        foreach ($jsFiles as $jsFile) {
            try {
                $jsContent = Http::get($jsFile)->body();
                File::put($jsDir . '/' . basename($jsFile), $jsContent);
            } catch (\Exception $e) {
                \Log::error('Failed to download JS file: ' . $jsFile);
            }
        }

        // Download Images
        // $imageUrls = $this->getImageLinks($websiteUrl);
        // foreach ($imageUrls as $imageUrl) {
        //     try {
        //         $imgContent = Http::get($imageUrl)->body();
        //         File::put($imagesDir . '/' . basename($imageUrl), $imgContent);
        //     } catch (\Exception $e) {
        //         \Log::error('Failed to download image: ' . $imageUrl);
        //     }
        // }

        // Save HTML content
        $htmlContent = $this->getHtmlContent($websiteUrl);
        if ($htmlContent) {
            try {
                File::put($baseDir . '/html/index.html', $htmlContent);
            } catch (\Exception $e) {
                \Log::error('Failed to save HTML content: ' . $e->getMessage());
            }
        }
    }


    private function getFolderNameFromUrl($url)
    {
        $parsedUrl = parse_url($url);
        return preg_replace('/^www\./', '', $parsedUrl['host']);
    }

    public function showHtmlContent(Request $request)
    {
        $websiteUrl = $request->input('website_url');
        $htmlFilePath = public_path('datawebsite/html/index.html');  // Path to the HTML file

        // Check if the HTML file exists
        if (File::exists($htmlFilePath)) {
            // Read the content of the HTML file
            $htmlContent = File::get($htmlFilePath);

            // Pass the HTML content to the view
            return view('your-view')->with('htmlContent', $htmlContent);
        } else {
            // Handle the case where the file does not exist
            return back()->with('error', 'HTML file not found.');
        }
    }

    //c?a anh h?i OCD
    public function get_content_page(Request $request)
    {
        $variables = config('template.config');
        $data = $request->all();
        $htmlKeys = ['header_html', 'index_html', 'footer_html', 'list_html', 'detail_html'];
        $successFiles = [];
        
        $this->downloadAssets($data['linkweb']);
        foreach ($htmlKeys as $htmlKey) {
            if (isset($data[$htmlKey])) {
                $processedHtml = $this->replace_text($data[$htmlKey], $variables);
                $this->saveHtmlToFile($data['linkweb'], $htmlKey, $processedHtml);
                $successFiles[] = $htmlKey;
            }
        }
        return redirect()->route('link-replace-file')->with('message', 'Files processed successfully.')->with('successFiles', $successFiles);
    }


    public function replace_text(string $html, array $variables): string
    {
        $crawler = new Crawler($html);

        foreach ($variables as $selector => $value) {
            if (is_array($value)) {
                foreach ($value as $nestedSelector => $nestedValue) {
                    if (!empty($nestedSelector) && is_string($nestedSelector)) {
                        $stt = 0;
                        $crawler->filter($selector)->each(function (Crawler $node) use ($value, $nestedValue, $variables, $nestedSelector, $stt) {
                            $stt++;
                            $liTags = $node->filter('li');
                            $row = $liTags->count();
                            $ulNode = $node->getNode(0);
                            if ($stt===1 && !$ulNode->hasAttribute('data-row')) {
                                $ulNode->setAttribute('data-row', $row);
                            }

                            if ($row > 0) {
                                $firstLi = $liTags->first();
                                $liTags->each(function (Crawler $li) use ($firstLi) {
                                    if ($li->getNode(0) !== $firstLi->getNode(0)) {
                                        // $li->getNode(0)->parentNode->removeChild($li->getNode(0));
                                    }
                                });


                                $firstLi->filter($nestedSelector)->each(function (Crawler $nestedNode) use ($nestedValue, $variables) {
                                    $this->processNode($nestedNode, $nestedValue, $variables);
                                });

                                $result = $node;
                            }
                        });
                    }
                }
            } else {
                if (!empty($selector) && is_string($selector)) {
                    $crawler->filter($selector)->each(function (Crawler $node) use ($value, $variables) {
                        $this->processNode($node, $value, $variables);
                    });
                }
            }
        }

        return $crawler->html();
    }


    /**
     * Hàm xử lý node cụ thể.
     */
    private function processNode(Crawler $node, $value, $variables)
    {
        if ($node->children()->count() != 0) {
            return;
        }

        $domNode = $node->getNode(0);

        if ($domNode->nodeName === 'a') {
            if ($domNode->hasAttribute('href')) {
                $domNode->setAttribute('href', $variables['a[href=""]'] ?? '#');
            }
            $domNode->nodeValue = $value;
        }

        if ($domNode->nodeName === 'link' || $domNode->nodeName === 'script') {
            if ($domNode->hasAttribute('href') || $domNode->hasAttribute('src')) {
                $attribute = $domNode->hasAttribute('href') ? 'href' : 'src';
                $currentValue = $domNode->getAttribute($attribute);
                $fileName = ($domNode->hasAttribute('href') ? 'css/' : 'js/') . basename($currentValue);
                $domNode->setAttribute($attribute, $value . $fileName ?? '#');
            }
        }

        if ($domNode->nodeName === 'meta') {
            $metaName = $domNode->getAttribute('name');
            if ($metaName === 'keywords') {
                $domNode->setAttribute('content', $variables['keywords'] ?? '');
            }
            if ($metaName === 'description') {
                $domNode->setAttribute('content', $variables['description'] ?? '');
            }
            $domNode->nodeValue = '';
        }

        if ($domNode->nodeName === 'img') {
            if ($domNode->hasAttribute('src')) {
                $domNode->setAttribute('src', $value);
                $domNode->setAttribute('alt', $variables['alt_img']);
            }
        }

        if ($domNode->nodeName !== 'a' && $domNode->nodeName !== 'link' && $domNode->nodeName !== 'script' && $domNode->nodeName !== 'meta') {
            if (empty($domNode->nodeValue)) {
                $domNode->nodeValue = null;
            } else {
                $domNode->nodeValue = $value;
            }
        }
    }

    private function saveHtmlToFile($web, $key, $html)
    {
        $parsedUrl = parse_url($web);
        $domain = preg_replace('/^www\./', '', $parsedUrl['host']);
        $directory = public_path('datawebsite/' . $domain);

        if (!is_dir($directory)) {
            if (!@mkdir($directory, 0777, true)) {
                error_log('Failed to create directories: ' . $directory);
                die('Failed to create directories: ' . $directory);
            }
        }

        $filePath = $directory . '/' . str_replace('_html', '', $key) . '.html';

        if (file_put_contents($filePath, $html) === false) {
            error_log('Failed to write HTML to file: ' . $filePath);
            die('Failed to write HTML to file: ' . $filePath);
        }
    }


}

