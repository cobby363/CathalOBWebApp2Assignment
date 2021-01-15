import express from 'express';
import UpcomingMovieSchema from './upcomingMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    UpcomingMovieSchema.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});

//   router.get('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     UpcomingMovieSchema.findByUpcomingMovieDBId(id).then(upcoming => res.status(200).send(upcoming)).catch(next);
//   });

// router.get('/:id/reviews', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   getMovieReviews(id)
//   .then(reviews => res.status(200).send(reviews))
//   .catch((error) => next(error));
// });

//   router.get('/:id/genres', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     getGenres(id)
//     .then(genres => res.status(200).send(genres))
//     .catch((error) => next(error));
//   });

 export default router;