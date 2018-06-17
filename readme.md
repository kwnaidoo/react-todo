<p align="center">
## About React ToDo
    React todo is a basic ToDo application that's built on laravel and React JS, the
    application structure is as follows:

    -- app
        -- Http
            -- Controllers
                -- TasksController - The API controller for adding , listing
                                     and updating tasks.
            -- Requests
                -- TaskRequest - a Request object to validate tasks for
                                 POST / PUT / PATCH.
            -- Resources
                -- Task  - A Resource handler to transform our model
                           into a JSON response.
         -- database
             -- migrations - Added db migrations for all tables.
             -- seeds
                 -- TaskListsSeeder - seeder to create task lists
         -- Task  - Model for our tasks table.
         -- TaskList - Model for our tasklist table.
         -- Resources
             -- reactjs - All react components.
             -- views/app.blade - The default application layout.
        -- webpack.mix.js - used for compiling our JSX files
</p>
<p align="center">
## Installation instructions

1) mv .env.example to .env and drop in your database credentials.
2) php artisan key:generate
3) php artisan migrate
4) php artisan db:seed --class TaskListsSeeder
5) php artisan serve
6) visit : http://127.0.0.1:8000





</p>
