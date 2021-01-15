import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import RemoveFromWatchlistButton from '../components/buttons/removeFromWatchlist'
import {MoviesContext} from '../contexts/movieContext'

const AddToWatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter( m => m.watchlist )
  //const watchlist2 = context.nowPlaying.filter( n => n.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"WatchList"}
      action={movie => <RemoveFromWatchlistButton movie={movie} />}
    />
  );
};

export default AddToWatchListPage;
