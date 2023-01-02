import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
import genreModel from '../api/genres/genreModel';
import genres from './genres';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import tvModel from '../api/tvs/tvModel';
import tvs from './tvs';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all genres documents in collection and inserts test data
async function loadGenres() {
  console.log('load genre Data');
  try {
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genre Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all tv series documents in collection and inserts test data
export async function loadTvs() {
  console.log('load seed data');
  console.log(tvs.length);
  try {
    await tvModel.deleteMany();
    await tvModel.collection.insertMany(tvs);
    console.info(`${tvs.length} Series were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load tv series Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
  loadTvs();
}