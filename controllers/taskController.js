const { v4: uuid } = require('uuid');
const { pool } = require('../utils/db');

// const { ValidationError } = require('../utils/errors.js');

const getAllTasks = async (req, res) => {
  const q = 'SELECT * FROM `tasks`';
  const changeBoolean = (e) => {
    const status = e.isCompleted.readInt8();
    return status !== 0;
  };
  const [listTasks] = await pool.execute(q);
  listTasks.map((e) => (e.isCompleted = changeBoolean(e)));

  if (!listTasks) {
    res.json({
      status: 'failed',
      message: "I can't load the database",
    });
  } else {
    res.json({
      status: 'success',
      data: listTasks,
    });
  }
};

const deleteTask = async (req, res) => {
  const idTask = req.body.id;
  console.log('id', idTask);
  const q = 'DELETE FROM `tasks` WHERE `id`=:idTask';
  await pool.execute(q, {
    idTask,
  });
  res.json({
    status: 'success',
  });
};

const addNewTask = async (req, res) => {
  const newTask = req.body.title;
  const q = 'INSERT INTO `tasks` VALUES(:id,:taskName,0)';
  await pool.execute(q, {
    id: uuid(),
    taskName: newTask,
  });

  res.json({
    status: 'success',
  });
};

const editTitleOfTask = async (req, res) => {
  const { id, title } = req.body;
  const q = 'UPDATE `tasks` SET `title`=:title WHERE `id`=:id';
  await pool.execute(q, {
    id,
    title,
  });
  res.json({
    status: 'success',
  });
};

module.exports = {
  getAllTasks,
  addNewTask,
  deleteTask,
  editTitleOfTask,
};
