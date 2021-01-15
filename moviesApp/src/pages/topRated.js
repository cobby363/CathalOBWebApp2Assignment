import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/movieContext'
import AddToFavoriteButton from "../components/buttons/addToFavourites";

const TopRatedPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.topRated.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  
      action={(topRated) => {
        return <AddToFavoriteButton movie={topRated} />;
      }}
    />
  );
};

export default TopRatedPage;