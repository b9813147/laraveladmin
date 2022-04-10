<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\HomeController;
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
Auth::routes(['register' => false]);

Route::get('/refresh_captcha', [LoginController::class, 'refresh_captcha'])->name('refresh_captcha');
Route::group(['middleware' => ['auth', 'active']], function () {
    Route::get('/', [HomeController::class, 'index']);

    Route::group(['middleware' => 'identity'], function () {
        Route::resource('admin', AdminController::class);
    });
});

