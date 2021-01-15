# Assignment 2 - Web API.

Name: Cathal O'Brien

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Authentication with React app from assig1 - Allows for privacy
 + Integration of assignment 1 - a more asthetically pleasing view
 + Added an upcoming movies page - user can see what movies are coming p in the near future
 + Added a now playing page - users can see movies that are out and playing at the moment that they may be interested in
 + Added a watch list page - user can add an upcoming or now playing movie to a watch list
 + Added a favourites page - user can add movie from the home page to a favourites list that they can go back to sometime
 + Allows for filteration via genres - user can see movies only from specific pages
 + Page started for details - user will be able to see details about a specific movie

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

Install the following , Node, NPM, MongoDB instance. Also having the desktop version of postman will help for verifying Gets and Pushes. You must have git installled on the VS code terminal also.

Here is how I installed git and was able to commit my changes to my repo.

git clone http:\myrepo.git

followed by installation

git instal

## API Configuration

Creation of a .env & a .gitignore 

```bat
.env

NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY= *Your key*
REACT_APP_TMDB_KEY= *Your key*
mongoDB=mongodb://localhost:27017/movies_db
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=true
SECRET= Your secret
```

```bat
.gitignore

node_modules
build
npm-debug.log
.env
.DS_Store
.env

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
/**/.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local


npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | Can add to favourites | N/A | N/A
| /api/upcoming/{movieid} | Get an Upcoming Movie | Can add to Watchlist | N/A | N/A
| /api/nowPlaying/{movieid} | Get a Movie now playing | Can add to Watchlist | N/A | N/A

## Security and Authentication
user must login and security is implemented using passport. The protected routes are as follows:

            <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
            <PrivateRoute path="/reviews/:id" component={MovieReviewPage}/>
            <PrivateRoute path="/movies/:id/full-cast" component={MovieCastPage} />
            <PrivateRoute path="/movies/upcoming" component={UpcomingMoviePage}/>
            <PrivateRoute path="/movies/nowPlaying" component={NowPlaying}/>
            <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <PrivateRoute exact path="/movies/watchlist" component={WatchListMoviesPage} />
            <PrivateRoute path = "/movies/popular" component = {PopularPage}/>
            <PrivateRoute path="/movies/nowPlaying" component={NowPlaying}/>
            <PrivateRoute path="/movies/topRated" component={TopRatedPage}/>
            <PrivateRoute path="/movies/:id" component={MoviePage} />
            <PrivateRoute path="/" component={HomePage} />
            
    

## Integrating with React App

Within the react app's jackage.json, I added a proxy to go to port 8080 at which I have my API set up to always run on. 

~~~Javascript

export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~
