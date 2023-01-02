import express from 'express';
import { tvs } from './tvsData';
import uniqid from 'uniqid';

import { getTvs } from '../tmdb-api';

import tvModel from './tvModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', asyncHandler( async(req, res) => {
    const tvs = await getTvs();
    res.status(200).json(tvs);
  }));

// Series details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tv = await tvModel.findByTvDBId(id);
    if (tv) {
        res.status(200).json(tv);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Series reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (tvReviews.id == id) {
        res.status(200).json(tvReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

//Post review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (tvReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        tvReviews.results.push(req.body); 
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;