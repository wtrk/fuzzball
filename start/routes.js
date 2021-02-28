"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/api/fuzzballs", "UserController.entireDb");
Route.get("/api/fuzzball/:entry1/:entry2", "UserController.oneEntryReturn");
Route.post("/api/fuzzball", "UserController.oneNewEntry");
Route.post("/api/insertEntireInDB", "UserController.insertEntireInDB");
