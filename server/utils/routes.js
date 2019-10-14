//TODO require the controller
const Tasks = require(('../controller/Tasks'));



module.exports = function(app) {
    app.get("/task", Tasks.GetAll);
    app.get("/task/:_id", Tasks.GetOne);
    app.post("/task", Tasks.Create);
    app.put("/task/:_id", Tasks.Update);
    app.delete("/task/:_id", Tasks.Delete);
}