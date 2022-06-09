/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /todolist': "TodolistController.create",
    'GET /todolist':"TodolistController.find",
    'GET /todolist/:id':"TodolistController.findOne",
    'PATCH /todolist/:id':"TodolistController.update",
    'DELETE /todolist/:id':"TodolistController.delete",
};
