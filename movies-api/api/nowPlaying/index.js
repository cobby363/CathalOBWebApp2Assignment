import express from 'express';
import NowPlayingMovieSchema from './nowPlayingMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    NowPlayingMovieSchema.find().then(nowPlaying => res.status(200).send(nowPlaying)).catch(next);
});


 export default router;