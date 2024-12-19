<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Goutte\Client;
use Symfony\Component\DomCrawler\Crawler;
use Weidner\Goutte\GoutteFacade;
use Symfony\Component\HttpClient\HttpClient;
use Response;
class CrawlDataController extends Controller
{
    public function index()
    { 
        //return view('frontend.view', compact( 'str'));
        return view('crawl');
    }

    public function link_download_link_website()
    { 
        return view('link_download_link_website');
    }

    public function link_replace_file()
    { 
        return view('link_replace_file');
    }
    

    public function actionCrawl(Request $request){
        if(!empty($request->description)){
            $crawler_list = explode("\n", str_replace("\r", "", $request->description));
            foreach($crawler_list as $key_word){
                $this->scrape_bing(key_word: $key_word);
            }

            return redirect()->route('crawl-data')->with('success', 'Successfully. Please copy the file in the data folder ');
        }
        if(!empty($request->domain_website)){
            $domain = !empty($request->domain_website) ? $request->domain_website : '';
            $sub_cate = !empty($request->sub_cate) ? $request->sub_cate : '';
            $this->get_link_content( $domain, $sub_cate, $request);
            return redirect()->route('link_download_link_website')->with('success', 'Successfully. Please copy the file in the data folder ');
        }
        //$this->click_link_form( $domain, $sub_cate, $request);
        return back()->with('error', 'Please try again!');
        
    }

    public function get_link_content($domain,$sub_cate, $request ){
        $content_body_list_html = !empty($request->content_body_list_html) ? $request->content_body_list_html : '';
        $client = new Client(HttpClient::create(['timeout' => 20]));
        $response  = $client->request('GET', $domain.'/'.$sub_cate);
        $links = $response->filter('a')->each(function ($node) {
            return $node->link()->getUri(); 
            //return $node->children();
        });
        
        if(!empty($links)){
            foreach ($link as $key => $link) {
                if(is_valid_domain_name($link)){
                    dd($link);
                }
            }
        }

    }

    function is_valid_domain_name($domain_name)
    {
        return (preg_match("/^([a-z\d](-*[a-z\d])*)(\.([a-z\d](-*[a-z\d])*))*$/i", $domain_name) //valid chars check
                && preg_match("/^.{1,253}$/", $domain_name) //overall length check
                && preg_match("/^[^\.]{1,63}(\.[^\.]{1,63})*$/", $domain_name)   ); //length of each label
    }

    public function click_link_form($domain,$sub_cate, $request ){

        $content_body_list_html = !empty($request->content_body_list_html) ? $request->content_body_list_html : '';
        $client = new Client(HttpClient::create(['timeout' => 20]));
        $response  = $client->request('GET', $domain.'/'.$sub_cate);
        $array_content = $this->get_content_list($domain,$response,  $content_body_list_html,$request);
        dd($array_content);
        if(!empty($array_content)){
            $this->export_txt($array_content,$key_word);
        }
        
        return true;

    }

    private function get_content_list ($domain , $crawler , $html_body, $request = null){
        $crawler->filter($html_body)->each(function ($node) use (&$array_content ,$request) { 
            $content_list_title_html = !empty($request->content_list_title_html) ?  : '';
            // $content_list_link_detail_href = !empty($request->content_list_link_detail_href) ? $request->content_list_link_detail_href : '';
            // $content_list_image_html = !empty($request->content_list_image_html) ? $request->content_list_image_html : '';
            // $content_detail_class_html = !empty($request->content_detail_class_html) ? $request->content_detail_class_html : '';
            
            //$title = $node->filter($content_list_title_html)->text();
            $link = $node->filter('a')->text();//attr('href');
            
            echo '<pre>';
            print_r($link);
            echo '</pre>';
            //$description = mb_convert_encoding($node->filter('.b_caption')->text(),"GB2312", "UTF-8") ;
            
            // $title = $node->filter('h2')->text();
            // if(!empty($link) && $link != '/'){
            //     dd(str_replace([$domain],"",$link ));
            //     // $description = $node->filter('p')->text();
            //     $array_content[] = [$title, $link, $description];
            // }
        });

        die;
    }

    private function get_content_detail (){
        $form = $crawler->filter('form')->form();
        $crawler = $client->submit($form, ['q' => $key_word]);
        $crawler->filter('#b_results li.b_algo')->each(function ($node) use (&$array_content) {  
            $title = mb_convert_encoding($node->filter('h2')->text(),"GB2312", "UTF-8") ;
            $link = mb_convert_encoding($node->filter('a')->attr('href'),"GB2312", "UTF-8") ;
            $description = mb_convert_encoding($node->filter('.b_caption')->text(),"GB2312", "UTF-8") ;
            // $title = $node->filter('h2')->text();
            // $link = $node->filter('a')->attr('href');
            // $description = $node->filter('p')->text();
            $array_content[] = [$title, $link, $description];  
        });
    }
    public function scrape_bing($key_word)
    {  
        //$key_word = '王楚钦球拍';//'王楚钦球拍被踩断调查不了了之';
        
        $url = 'https://www.bing.com/search?q='.$key_word.'&qs=n&form=QBRE&sp=-1&lq=0&pq='.$key_word.'&sc=1-14&sk=&cvid=27586354EBAE447EA0116979A43673C5&ghsh=0&ghacc=0&ghpl=';
        //$crawler = GoutteFacade::request('GET', $url);
        $client = new Client(HttpClient::create(['timeout' => 20]));
        
        $crawler = $client->request('GET', $url);
        //$crawler = $client->click($crawler);
        $array_content = array();
        //$crawler->filter('#b_results li')->each(function($node){
        $crawler->filter('#b_results li.b_algo')->each(function ($node) use (&$array_content) {  
            $title = mb_convert_encoding($node->filter('h2')->text(),"GB2312", "UTF-8") ;
            $link = mb_convert_encoding($node->filter('a')->attr('href'),"GB2312", "UTF-8") ;
            $description = mb_convert_encoding($node->filter('.b_caption')->text(),"GB2312", "UTF-8") ;
            // $title = $node->filter('h2')->text();
            // $link = $node->filter('a')->attr('href');
            // $description = $node->filter('p')->text();
            $array_content[] = [$title, $link, $description];  
        });
        //dd($array_content);
        $this->export_csv($array_content,$key_word);
        
        return true;
    }

    private function form_submit (){
        $form = $crawler->filter('form')->form();
        $crawler = $client->submit($form, ['q' => $key_word]);
        $crawler->filter('#b_results li.b_algo')->each(function ($node) use (&$array_content) {  
            $title = mb_convert_encoding($node->filter('h2')->text(),"GB2312", "UTF-8") ;
            $link = mb_convert_encoding($node->filter('a')->attr('href'),"GB2312", "UTF-8") ;
            $description = mb_convert_encoding($node->filter('.b_caption')->text(),"GB2312", "UTF-8") ;
            // $title = $node->filter('h2')->text();
            // $link = $node->filter('a')->attr('href');
            // $description = $node->filter('p')->text();
            $array_content[] = [$title, $link, $description];  
        });
    }
    private function export_csv($data, $filename){
        // Specify the directory path where you want to save the CSV file  
        $directory = 'data/';
        $delimiter = ',';
        // Specify the CSV file path  
        $filename = str_replace("\nH", ",H", $filename).'.csv';
        $csvFilePath = $directory . $filename;  
        
        // Open the CSV file in write mode
        $file = fopen(public_path(path: $csvFilePath), 'w');
        $header_title = ['title', 'link','description'] ;
        // Write the header row to the CSV file
        $headers = array(
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename='.$filename,
            'Pragma' => 'no-cache'
        );

        fputcsv($file, $header_title);
        
        // Write the data rows to the CSV file
        foreach ($data as $row) {
            fputcsv($file, $row,$delimiter);
        }
        // Close the CSV file
        fclose($file);
       
        return Response::download($csvFilePath, $filename, $headers);
        //return response()->download($csvFilePath, $filename, $headers);
       //return response()->download($filename, 'file '.date("d-m-Y H:i").'.csv', $headers);
    }
    
    public function format_content($data, $filename){
        foreach ( decode_json($json) as $key  => $value) {
            $data_replace = $data;
            $data_replace = str_replace($key, $value, $data_replace);
        } 
    }
}
