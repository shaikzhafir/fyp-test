'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('api/projects','ProjectController.index')
Route.resource('api/tasks','TaskController')
Route.resource('api/users','UserController').middleware('auth')
Route.get('api','TestController.index')
Route.post('api/tasks','TaskController.create')
Route.post('api/usersMany','UserController.storeMany')


Route.post('api/login','UserController.login')