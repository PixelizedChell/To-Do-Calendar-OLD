/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

const loginRouter = require('./routes/loginRouter.js');
const registrationRouter = require('./routes/registrationRouter.js');
const todoListRouter = require('./routes/todoListRouter.js');
const calendarRouter = require('./routes/calendarRouter.js');

app.use('/login', loginRouter);
app.use('/signup', registrationRouter);
app.use('/todoList', todoListRouter);
app.use('/calendar', calendarRouter);

app.get('/', (req, res) => {
  res.send('GET request');
});

app.post('', (req, res) => {
  res.send('POST request');
});

app.get('/api', (req, res) => {
  console.log('api route');
  res.send({ message: 'Welcome to to-do-calendar-backend!' });
});

app.post('/signup2', (req, res) => {
  console.log('signup2 route');
  res.send('ohayo');
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
