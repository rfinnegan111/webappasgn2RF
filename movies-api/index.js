import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import './db';
import './seedData';
import usersRouter from './api/users';
import session from 'express-session';
import authenticate from './authenticate';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

//update /api/Movie route
app.use('/api/movies', authenticate, moviesRouter);
//Users router
app.use('/api/users', usersRouter);
app.use(errHandler);
//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});