const express = require('express');
const { Router } = require('express');
const { getAllTasks, addNewTask } = require('../controllers/taskController');

// const { ValidationError } = require('../utils/errors');

const taskRouter = Router();

taskRouter.route('/').get(getAllTasks);
taskRouter.route('/add-task').post(addNewTask);
// taskRouter.route('/editing').post();
// taskRouter.route('/delete').detele()

module.exports = {
  taskRouter,
};
