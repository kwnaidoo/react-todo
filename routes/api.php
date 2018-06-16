<?php

// Let's group all runs under V1 so we can version our Api

Route::prefix('v1')->group(function () {
   Route::get("/tasks/{taskListName}", 'TasksController@tasks');
});
