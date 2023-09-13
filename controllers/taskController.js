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
const addNewTask = async (req, res) => {
  console.log(req.body);
  res.json({
    status: 'success',
  });
};

module.exports = {
  getAllTasks,
  addNewTask,
};
