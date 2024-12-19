<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CrawlDataController;
use App\Http\Controllers\FormatContentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('crawl-data', [CrawlDataController::class, 'index'])->name('crawl-data');
Route::get('link_download_data', [CrawlDataController::class, 'link_download_link_website'])->name('link-download-data');
Route::get('link_replace_file', [FormatContentController::class, 'link_replace_file'])->name('link-replace-file');
Route::post('crawl-data', [CrawlDataController::class, 'actionCrawl']);
Route::get('/', function () {
    return view('index');
});
// Route::post('download-assets', [FormatContentController::class, 'downloadAssets'])->name('download-assets');
Route::post('/download-assets', [FormatContentController::class, 'downloadAssets'])->name('download-assets');
// routes/web.php
Route::get('/download-zip', [FormatContentController::class, 'zipDownloadedFiles']);
//c?a h?i  OCD
Route::post('get-content-page', [FormatContentController::class, 'get_content_page']);
Route::get('get-content-page/{any}/show', [FormatContentController::class, 'get_content_page_show'])->name('get-content-page.show');