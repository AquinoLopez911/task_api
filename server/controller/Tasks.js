const mongoose = require('mongoose');
const Task = mongoose.model('Task');

class TaskController {
    GetAll(req, res) {
        Task.find()
            .then(tasks => res.jason(tasks))
            .catch(err => res.json(err));

    }
    GetOne(req, res) {
        Task.find({_id: req.params._id})
            .then(tasks => res.jason(tasks))
            .catch(err => res.json(err));
    }
    Create(req, res) {
        let task = new Task(req.body);
        task.save()
            .then(x => res.json({status: "ok"}))
            .catch(err => res.json(err));

    }
    Update(req, res) {
        Task.findOneAndUpdate({_id : req.params._id}, req.body)
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));

    }
    Delete(req, res) {
        Task.remove({_id : req.params._id}, req.body)
        .then(() => res.json({status: "ok"}))
        .catch(err => res.json(err));
    }
}
module.exports = new TaskController();