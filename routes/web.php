<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('layouts.app');
//});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/refresh_captcha', [App\Http\Controllers\auth\LoginController::class, 'refresh_captcha'])->name('refresh_captcha');
//路由分組
//Route::group(['prefix'=>'admin','namespace'=>'Admin'],function (){
//
//    //登入顯示 name給路由起一個別名
//    Route::get('login','LoginController@index')->name('admin.login');
//
//    //登入方法 name給路由起一個別名
//    Route::post('login','LoginController@login')->name('admin.login');
//
//    //定義圖形驗證碼路由
//    Route::get('img_code','CommonController@imgCode')->name('admin.img_code');
//});
