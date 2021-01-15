import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import WatchListMoviesPage from './pages/watchlistMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upcomingPage";
import MoviesContextProvider from "./contexts/movieContext";
import GenresContextProvider from "./contexts/genreContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import NowPlaying from './pages/nowPlaying'
import PopularPage from './pages/popularPage'
import TopRatedPage from './pages/topRated'
import MovieCastPage from "./pages/movieCastPage"
import LoginPage from "./pages/loginPage"
import SignUpPage from "./pages/signUpPage"
import PrivateRoute from "./pages/privateRoute"
import AuthHeader from "./pages/authHeader"
import AuthProvider from "./pages/authContext"


const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <AuthHeader />
      <div className="jumbotron">
        <SiteHeader />     
        <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />,
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
            <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider> 
          </MoviesContextProvider>
          
        </div>
       
      </div>
      </AuthProvider>
    </BrowserRouter>
    );
  };
  ReactDOM.render(<App/>, document.getElementById("root"));