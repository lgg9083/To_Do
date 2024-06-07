const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/taskController");

router.get("/add", tasksController.createTask);
router.post("/add", tasksController.createTaskSave);
router.post('/remove', tasksController.removeTask)
router.get('/edit/:id', tasksController.editTask)
router.post('/edit', tasksController.editTaskSave)
router.post('/check', tasksController.checkTask)
router.get("/", tasksController.showTask);

module.exports = router;
