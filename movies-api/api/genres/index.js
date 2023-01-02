import express from 'express';
import Genre from './genreModel'

import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

// register
router.post('/', asyncHandler(async (req, res) => {
    if (req.query.action === 'register') {  //if action is 'register' then save to DB
        await Genre(req.body).save()
        res.status(201).json({
            code: 201,
            msg: 'Successful created new genre.',
        });
    }
    else {  //Must be authenticating the!!! Query the DB and check if there's a match
        const genre = await Genre.findOne(req.body);
        if (!genre) {
            return res.status(401).json({ code: 401, msg: 'Authentication failed' })
        } else {
            return res.status(200).json({ code: 200, msg: "Authentication Successful", token: 'TEMPORARY_TOKEN' })
        }
    }
}));

 // Update
 router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Genre.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Genre Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update Genre' });
    }
});

export default router;