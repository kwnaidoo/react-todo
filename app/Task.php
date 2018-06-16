<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  /**
   * Create a One to many belongs to relationship
   *
   * @return \App\TaskList
   */
    function taskList(){
        return $this->belongsTo(TaskList::class);
    }
}
