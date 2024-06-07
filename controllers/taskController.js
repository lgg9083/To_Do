const Task = require("../models/Task");

module.exports = class TaslController {
  static createTask(req, res) {
    res.render("tasks/create");
  }
  static async createTaskSave(req, res) {
    const tasks = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await Task.create(tasks);

    res.redirect("/tasks");
  }
  static async showTask(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.render("tasks/all", { tasks });
  }

  static async removeTask(req, res) {
    const id = req.body.id;

    await Task.destroy({ where: { id: id } });

    res.redirect("/tasks");
  }
  static async editTask(req, res) {
    const id = req.params.id;

    const user = await Task.findOne({ where: { id: id }, raw: true });
    console.log(user);
    res.render("tasks/edit", { user });
  }
  static async editTaskSave(req, res) {
    const id = req.body.id;

    const newTask = {
      title: req.body.title,
      description: req.body.description,
    };

    await Task.update(newTask, { where: { id: id } });
    res.redirect("/tasks");
  }
  static async checkTask(req, res) {
    const id = req.body.id;
    console.log('id da do check', id)
    const task = {
      done: req.body.done === '0' ?  true : false,
    };
    await Task.update(task, { where: { id: id } });
    res.redirect("/tasks");
  }
};
