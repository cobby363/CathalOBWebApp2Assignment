import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingMovieModel from '../api/upcoming/upcomingMovieModel';
import nowPlayingMovieModel from '../api/nowPlaying/nowPlayingMovieModel';
import {movies} from './movies.js';
import {upcomingMovies} from './upcoming.js';
import {nowPlayingMovies} from './nowPlaying.js';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
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

export async function loadUpcoming() {
  console.log('load seed data');
  console.log(upcomingMovies.length);
  try {
    await upcomingMovieModel.deleteMany();
    await upcomingMovieModel.collection.insertMany(upcomingMovies);
    console.info(`${upcomingMovies.length} UpcomingMovies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadNowPlaying() {
  console.log('load seed data');
  console.log(nowPlayingMovies.length);
  try {
    await nowPlayingMovieModel.deleteMany();
    await nowPlayingMovieModel.collection.insertMany(nowPlayingMovies);
    console.info(`${nowPlayingMovies.length} NowPlayingMovies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}