<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Task extends JsonResource
{
    /**
     * Transform the task model into a JSON response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
          'id' => $this->id,
          'task' => $this->name,
          'task_list_name' => $this->taskList->name,
          'task_list_id' => $this->taskList->id
      ];
    }
}
