<?php

use Illuminate\Database\Seeder;
use App\TaskList;

class TaskListsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      /**
      * Normally we'd use a factory but in this instance
      * I'm creating meaningfull list names instead of random
      * words
      **/
          foreach(
            ['General', 'Projects', 'Work', 'Chores'] as $list
          ){
            $taskList = new TaskList();
            $taskList->name = $list;
            $taskList->save();
          }
    }
}
