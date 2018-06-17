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
    public function tasks($taskListName)
    {
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

    /**
    * Will store tasks posted to the API
    * We strongly bind a TaskRequest to this route to enforce
    * our validation rules as declared in our TaskRequest class
    *
    * @param \App\Http\Requests\TaskRequest $task
    *
    * @return App\Http\Resources\Task
    **/
    public function store(TaskRequest $request)
    {
      // First fetch the associated task list
      $list = TaskList::where(
        'name',
        urldecode($request->input('taskListName'))
      )->first();

      // Now create a new task instance and set it's props
      $task = new Task();
      $task->task_list_id = $list->id;
      $task->status = 0;
      $task->task = $request->input('task');
      $task->save();

      // Now fill a resourse object with this task
     // so we can return to browser.
      $taskResource = new TaskResourse($task);
      return $taskResource;
    }


    /**
    * Will set the status to done (1) or not done (0)
    *
    * @param Request $request | http request object
    * @param Integer $id | the task id
    *
    * @return App\Http\Resources\Task
    **/
    public function updateStatus(Request $request, $id)
    {
      // update the task accordingly
      // not using find to prevent exception
      $task = Task::where('id', $id)->first();
      if (!$task){
        return response()->json(
          ['error' => 404, 'message' => 'Task not found']
        );
      }
      $task->status = (int) $request->input('status');
      $task->save();

      // Now fill a resourse object with this task
     // so we can return to browser.
      $taskResource = new TaskResourse($task);
      return $taskResource;
    }
}
