<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/demo', function () {
   return view('index');
});


Route::middleware(['auth'])->group(function() {
    Route::get('projects', 'ProjectController@index');
    Route::get('projects/create', 'ProjectController@create');
    Route::post('projects', 'ProjectController@store');
    Route::get('projects/{id}', 'ProjectController@fetch');
    Route::put('projects/{id}', 'ProjectController@update');
    Route::delete('projects/{id}', 'ProjectController@destroy');

    Route::post('projects/{projectId}/nodes', 'ProjectNodeController@store');
    Route::put('projects/{projectId}/nodes/{nodeId}', 'ProjectNodeController@update');
    Route::delete('projects/{projectId}/nodes/{nodeId}', 'ProjectNodeController@destroy');

});

Route::get('player/{projectId}', 'PlayerController@play');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
