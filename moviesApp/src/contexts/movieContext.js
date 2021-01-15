 import React, { useEffect, createContext, useReducer } from "react";
 import { getMovies, getUpcomingMovies, getPlayingNow, getPopular, getTopRated } from "../api/tmdb-api";

 export const MoviesContext = createContext(null);
 const reducer = (state, action) => {
   switch (action.type) {
     case "add-favorite":
       return {
         movies: state.movies.map((m) =>
           m.id === action.payload.movie.id ? { ...m, favorite: true } : m
         ),
         topRated: state.topRated.map((n) =>
           n.id === action.payload.movie.id ? { ...n, favorite: true } : n
         ),
         upcoming: [...state.upcoming],
         nowPlaying: [...state.nowPlaying],
         popular: [...state.popular],
       };
     case "add-watchlist":
       return {
         upcoming: state.upcoming.map((m) =>
           m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
         ),
         nowPlaying: state.nowPlaying.map((n) =>
         n.id=== action.payload.movie.id ? {...n, watchlist:true}: n 
         ),
         popular: state.popular.map((o) =>
         o.id=== action.payload.movie.id ? {...o, watchlist:true}: o
         ),
         movies: [...state.movies],
         topRated: [...state.topRated],
       };
       case "remove-watchlist":
         return {
           upcoming: state.upcoming.map((m) =>
             m.id === action.payload.movie.id ? { ...m, watchlist: false } : m
           ),
         movies: [...state.movies],
         nowPlaying: [...state.nowPlaying],
         topRated: [...state.topRated],
         popular: [...state.popular],
       };
     case "load":
       return { movies: action.payload.movies, upcoming: [...state.upcoming] , nowPlaying: [...state.nowPlaying], popular: [...state.popular], topRated: [...state.topRated] };
     case "load-upcoming":
       return { upcoming: action.payload.upcoming, movies: [...state.movies], nowPlaying: [...state.nowPlaying], popular: [...state.popular], topRated: [...state.topRated] };
     case "load-nowPlaying":
       return { nowPlaying: action.payload.nowPlaying, movies: [...state.movies] , upcoming: [...state.upcoming], popular: [...state.popular], topRated: [...state.topRated] };
     case "load-popular":
       return { popular: action.payload.popular, movies: [...state.movies] , upcoming: [...state.upcoming], nowPlaying: [...state.nowPlaying], topRated: [...state.topRated] };
     case "load-topRated":
       return { topRated: action.payload.topRated, movies: [...state.movies] , upcoming: [...state.upcoming], nowPlaying: [...state.nowPlaying], popular: [...state.popular] };
     case "add-review":
       return {
         movies: state.movies.map((m) =>
           m.id === action.payload.movie.id
             ? { ...m, review: action.payload.review }
             : m
         ),
         upcoming: [...state.upcoming],
       };
     default:
       return state;
   }
 };

 const MoviesContextProvider = (props) => {
   const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], nowPlaying: [], popular: [], topRated: [], favourites: [] });
   const addToFavorites = (movieId) => {
     if (state.movies.find((m) => m.id === movieId)) {
     const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
     }
     else if (state.topRated.find((n) => n.id === movieId)) {
       const index = state.topRated.map((n) => n.id).indexOf(movieId);
       dispatch({ type: "add-favorite", payload: { movie: state.topRated[index] } });
   }
   };
  const addToWatchList = (movieId) => {
     if (state.upcoming.find((m) => m.id === movieId)) {
     const index = state.upcoming.map((m) => m.id).indexOf(movieId);
     dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index]}});
     }
     else if(state.nowPlaying.find((n) => n.id === movieId)){
       const index = state.nowPlaying.map((n) => n.id).indexOf(movieId);
       dispatch({ type: "add-watchlist", payload: { movie: state.nowPlaying[index] } });
   }
   else if(state.popular.find((o) => o.id === movieId)){
     const index = state.popular.map((o) => o.id).indexOf(movieId);
     dispatch({ type: "add-watchlist", payload: { movie: state.popular[index] } });
 }
   };

   const removeFromWatchlist = (movieId) => {
     const index = state.upcoming.map((m) => m.id).indexOf(movieId);
     dispatch({ type: "remove-watchlist", payload: { movie: state.upcoming[index] } })
 };
   const addReview = (movie, review) => {
     dispatch({ type: "add-review", payload: { movie, review } });
   };

   useEffect(() => {
     getMovies().then((movies) => {
       dispatch({ type: "load", payload: { movies } });
     });
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   useEffect(() => {
     getUpcomingMovies().then((upcoming) => {
       dispatch({ type: "load-upcoming", payload: { upcoming } });
     });
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  

   useEffect(() => {
     getPlayingNow().then((nowPlaying) => {
       dispatch({ type: "load-nowPlaying", payload: { nowPlaying } });
     });
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  useEffect(() => {
     getPopular().then((popular) => {
       dispatch({ type: "load-popular", payload: { popular } });
     });
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  useEffect(() => {
     getTopRated().then((topRated) => {
       dispatch({ type: "load-topRated", payload: { topRated } });
     });
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  return (
     <MoviesContext.Provider
       value={{
         movies: state.movies,
         upcoming: state.upcoming,
         nowPlaying: state.nowPlaying,
         popular: state.popular,
         topRated:state.topRated,
         addToWatchList :addToWatchList,
         addToFavorites: addToFavorites,
         addReview: addReview,
         removeFromWatchlist: removeFromWatchlist,
       }}
     >
       {props.children}
     </MoviesContext.Provider>
   );
 };

 export default MoviesContextProvider;

// import React, { useState, createContext, useEffect, useReducer } from "react";
// import { getMovies } from "../api/tmdb-api";

// export const MoviesContext = createContext(null);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "load":
//       return { movies: action.payload.result};
//     default:
//       return state;
//   }
// };

// const MoviesContextProvider = props => {
//   const [state, dispatch] = useReducer(reducer, { movies: []});
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     getMovies().then(result => {
//       console.log(result);
//       dispatch({ type: "load", payload: {result}});
//     });
//   },[]);

//   return (
//     <MoviesContext.Provider
//       value={{
//         movies: state.movies,
//         setAuthenticated
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };

// export default MoviesContextProvider