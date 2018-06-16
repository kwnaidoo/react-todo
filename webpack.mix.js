let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react(
   	'resources/reactjs/components/Task/index.jsx',
   	'public/js/components/Task/index.js'
  ).react(
   	'resources/reactjs/components/Tasks/taskItems.jsx',
   	'public/js/components/Tasks/taskItems.js'
   )
  .react(
   	'resources/reactjs/components/Tasks/index.jsx',
   	'public/js/components/Tasks/index.js'
   )
   .react('resources/reactjs/app.jsx', 'public/js/app.js');
