import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import tvsRouter from './api/tvs';
import './db';
import './seedData';
import usersRouter from './api/users';

import session from 'express-session';
import passport from './authenticate';

dotenv.config();

//error handling
const errHandler = (err, req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something broke!`);
  }
  res.status(500).send(`Error Captured!. Here's the situation: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(express.json());

//session middleware
app.use(passport.initialize());

//Movies Router
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);

//Upcoming Movies Router
app.use('/api/movies/upcoming', passport.authenticate('jwt', {session: false}), moviesRouter);

//Genres Router
app.use('/api/genres', genresRouter);

//Series Router
app.use('/api/tvs', passport.authenticate('jwt', {session: false}), tvsRouter);

//Users router
app.use('/api/users', usersRouter);

app.use(errHandler);

//Port listener
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});