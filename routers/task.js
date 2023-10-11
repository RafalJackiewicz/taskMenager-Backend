const express = require('express');
const { Router } = require('express');
const {
  getAllTasks,
  addNewTask,
  deleteTask,
  editTitleOfTask,
} = require('../controllers/taskController');

// const { ValidationError } = require('../utils/errors');

const taskRouter = Router();

taskRouter.route('/').get(getAllTasks);
taskRouter.route('/delete').delete(deleteTask);
taskRouter.route('/add-task').post(addNewTask);
taskRouter.route('/edit-task').patch(editTitleOfTask);

module.exports = {
  taskRouter,
};
