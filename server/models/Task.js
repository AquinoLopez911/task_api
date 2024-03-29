const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: {true: "name of task required"}
    },
    description: {
        type: String,
        required: [true, "description is needed to "]
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps : true});

mongoose.model("Task", TaskSchema);