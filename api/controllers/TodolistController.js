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
  },

  async find(req,res){
      try{
          const tasks = await Todolist.find();
          return res.ok(tasks);
      }
      catch(err){
        return res.serverError(err);
      }
  },
  async findOne(req,res){
      try{
          const task= await Todolist.findOne({
              id:req.params.id
          });
          return res.ok(task);
      }
      catch(err){
        return res.serverError(err);
      }
  },
  async update(req,res){
      try{
          let params= req.allParams();
          let attributes={};
          if(params.taskName){
              attributes.taskName= params.taskName;
          }
          if(params.hours){
            attributes.hours= params.hours;
          }
          if(params.des){
            attributes.des= params.des;
          }

          const result= await Todolist.update({id:req.params.id},attributes);
          const Updatedtask= await Todolist.findOne({
            id:req.params.id
        });
          return res.ok(Updatedtask);
      }
      catch(err){
        return res.serverError(err);
      }
  },

  async delete(req,res){
      try{
        const deletedTask= await Todolist.destroy({
            id:req.params.id
        });
        return res.ok(deletedTask);
    }
    catch(err){
      return res.serverError(err);
    }
  },

};

