<?php

namespace App\Http\Controllers;

use App\Task;
use App\TaskList;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\Task as TaskResourse;
use \Illuminate\Database\Eloquent\Collection;

use Illuminate\Routing\Controller as BaseController;

class TasksController extends BaseController
{
    /**
    * Will query return a collection of tasks
    * @param string $taskListName | name of list this task belongs to
    * @return App\Http\Resource\Task
    **/
    public function tasks($taskListName){

      // urldecode our task list name and search the db to see if it exists
      $list = TaskList::where('name', urldecode($taskListName))->first();
      $tasks = [];

      // if we have a task list - lets find all tasks associated to this list
      if ($list) {
        $tasks = Task::where('task_list_id', $list->id)->get();
      }

      /** No tasks found ? - lets return an empty collection
      * We don't need to return an exception here because it
      * could be a brand new list and therefore won't have any
      * tasks.
      **/
      if (count($tasks) == 0) {
        $tasks = Collection::make(new Task());
      }
      return TaskResourse::collection($tasks);
    }
}
