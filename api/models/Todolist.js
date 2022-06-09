/**
 * Todolist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    taskName:{
     type:'string',
     required:true
   },
   hours:{
    type:'string',
    required:true
   },
   des:{
    type:'string'
   }

  },
  datastore:'mongodb',
};

