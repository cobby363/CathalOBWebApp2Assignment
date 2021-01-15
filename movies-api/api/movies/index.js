import express from 'express';
import {
  //getMovies, getMovie, 
  getMovieReviews, getGenres
} from '../tmdb-api';
import MovieSchema from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  MovieSchema.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  MovieSchema.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

 router.get('/:id/genres', (req, res, next) => {
   const id = parseInt(req.params.id);
   getGenres(id)
   .then(genres => res.status(200).send(genres))
   .catch((error) => next(error));
 });

export default router;