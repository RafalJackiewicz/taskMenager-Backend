const { Router } = require('express');
const {
  getAllTasks,
  addNewTask,
  deleteTask,
  editTitleOfTask,
  toggleTask,
} = require('../controllers/taskController');

// const { ValidationError } = require('../utils/errors');

const taskRouter = Router();

taskRouter.route('/').get(getAllTasks);
taskRouter.route('/delete').delete(deleteTask);
taskRouter.route('/add-task').post(addNewTask);
taskRouter.route('/edit-task').patch(editTitleOfTask);
taskRouter.route('/toggle').patch(toggleTask);

module.exports = {
  taskRouter,
};
