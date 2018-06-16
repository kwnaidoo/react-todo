<?php
use App\TaskList;

// Will populate some dummy lists for testing
$factory->define(TaskList::class, function () {

  // not using faker since it's going to create random nonsense
  // using a static list to create more meaningfull test lists
  $lists = ['Work', 'Chores', 'Fun', 'Kids', 'Hobby Projects'];
    return [
        // randomly plunk an item from the list
        'name' => $lists[array_rand($lists, 1)]
    ];
});
