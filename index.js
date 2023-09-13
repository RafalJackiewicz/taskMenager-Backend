const express = require('express');
const cors = require('cors');
require('express-async-errors');
const methodOverride = require('method-override');
const { taskRouter } = require('./routers/task');
require('./utils/db');
const { pool } = require('./utils/db');

const app = express();

// Middlewares
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json()); // Content-type: application/json

// parsowanie danych przesyłanych w formularzach:
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Routing
app.use('/', taskRouter);

const port = 3100;
app.listen(port, 'localhost', () => {
  console.log(`Listen on http://localhost:${port}`);
});
