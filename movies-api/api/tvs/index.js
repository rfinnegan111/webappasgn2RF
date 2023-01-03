import express from 'express';
import uniqid from 'uniqid';
import { getTvs } from '../tmdb-api';
import { getTv } from '../tmdb-api';
import { getTvReviews } from '../tmdb-api';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', asyncHandler( async(req, res) => {
    const tvs = await getTvs();
    res.status(200).json(tvs);
  }));

// Get series details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tv = await getTv(id);
    if (tv) {
        res.status(200).json(tv);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get series reviews
router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvReviews = await getTvReviews(id);
    // search for review
    if (tvReviews) {
        res.status(200).json(tvReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

//Post series review
router.post('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvReviews = await getTvReviews(id);
    if (tvReviews) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        tvReviews.push(req.body);
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

export default router;