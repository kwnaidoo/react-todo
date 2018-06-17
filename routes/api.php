<?php

// Let's group all runs under V1 so we can version our Api

Route::prefix('v1')->group(function () {
   // Will get a list of tasks by task list
   Route::get("/tasks/{taskListName}", 'TasksController@tasks');

   // Will create a new task
   Route::post("/tasks/create/", 'TasksController@store');

   // Will update the status of a task
   Route::patch("/tasks/set-status/{id}", 'TasksController@updateStatus');
});
