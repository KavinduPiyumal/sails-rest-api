/**
 * TodolistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  async create(req,res){
      try{
        let params= req.allParams();
        if(!params.taskName && !params.hours){
            return res.badRequest({err:'taskName and hours is required'});
          }
        else if(!params.taskName){
          return res.badRequest({err:'taskName is required'});
        }
        else if(!params.hours){
            return res.badRequest({err:'hours is required'});
        }
   
        const results= await Todolist.create({
            taskName:params.taskName,
            hours:params.hours,
            des:params.des
        });
        return res.ok(results);
      }
      catch(err){
          return res.serverError(err);
      }   
  }

};

