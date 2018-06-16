<?php

use Illuminate\Database\Seeder;
use App\TaskList;

class TasksListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      // let's create three fake lists
      factory(App\TaskList::class, 3)->create()->each(function ($tl) {
        $tl->save();
      });
    }
}
