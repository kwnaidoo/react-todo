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

/**
* Normally we should use a controller to do this however our
* App's heavily react based so there's esssentially just one
* web route to bootstrap the entire APP therefore creating a
* controller for this would be over kill.
**/
Route::get('/', function () {
    return view('app')->with(
      [
        'taskLists' => \App\TaskList::all()
      ]
    );
});
