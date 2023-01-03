import express from 'express';
import uniqid from 'uniqid';
import { getMovies } from '../tmdb-api';
import { getUpcomingMovies } from '../tmdb-api';
import { getMovie } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', asyncHandler( async(req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
  }));

router.get('/upcoming', asyncHandler( async(req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
  }));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    console.log(movie)
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get movie reviews
router.get('/:id/reviews', asyncHandler(async  (req, res) => {
    const id = parseInt(req.params.id);
    const movieReviews = await getMovieReviews(id)
    // find reviews in list
    if (movieReviews) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

//Post a movie review
router.post('/:id/reviews', asyncHandler(async  (req, res) => {
    const id = parseInt(req.params.id);
    const movieReviews = await getMovieReviews(id)
    if (movieReviews) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.push(req.body); 
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

export default router;