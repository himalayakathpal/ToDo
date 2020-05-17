const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        taskDescription:{
            type:String,
            required: true
        },
        dueDate:{
            type:Date

        },
        category:{
            type:String,
            required: true
        }


    }

);
const Task = mongoose.model('Task',taskSchema);
module.exports=Task;