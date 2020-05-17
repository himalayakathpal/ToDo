const Task = require('../models/task');


module.exports.home = async function(req,res){
    try{
        let tasks =await Task.find({});
        res.render('home',{
            title: 'ToDo',
            tasks: tasks
        })

    }catch(err){
        console.log('error in finding tasks');
    }
}

module.exports.create = async function(req,res){
    try{
        await Task.create(
            {
          taskDescription: req.body.description,
          dueDate: req.body.date,
          category: req.body.category
            });
         return res.redirect('back');
    }catch(err){
        console.log(err,'Error in creation of task');
        return;
    }
    
  }

  module.exports.delete = async function(req,res){
      try{
        await Task.deleteMany({_id: {$in: req.body.id}});
        return res.redirect('back');
      }catch(err){
          console.log(err,'Error in deletion');
          return;
      }
}