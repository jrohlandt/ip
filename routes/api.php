<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('player/{id}', 'ProjectController@fetch');

Route::middleware(['auth:api'])->group(function() {
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


