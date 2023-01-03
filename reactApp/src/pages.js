import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import { UpcomingMoviesContext } from './upcomingMoviesContext';
import { TvsContext } from './tvsContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }

 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 
 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies</h2>
        <div>
            {context.movies.results.map(movie => { return <li>Movie ID: {movie.id} <br></br> Movie Name: {movie.title} <br></br> Release Date: {movie.release_date}<br></br> Run Time: {movie.runtime} <br></br><br></br> Overview: {movie.overview}<br /></li> })}
        </div>
    </>
}

export const UpcomingMovies = () => {
    const context = useContext(UpcomingMoviesContext);
    return <>
        <h2>Upcoming Movies</h2>
        <div>

            {context.upcomingMovies.results.map(upcomingMovie => { return <li>Movie ID: {upcomingMovie.id}<br></br> Movie Name: {upcomingMovie.title}<br></br> Release Date: {upcomingMovie.release_date}<br></br> Run Time: {upcomingMovie.runtime} <br></br><br></br> Overview: {upcomingMovie.overview}<br /></li> })}
        
        </div>
    </>
}

export const Tvs = () => {
    const context = useContext(TvsContext);
    return <>
        <h2>Tv Series</h2>
        <div>
            {context.tvs.results.map(tv => { return <li>Series ID: {tv.id}<br></br> Series Name: {tv.name} <br></br> Release Date: {tv.first_air_date} <br></br><br></br> Overview: {tv.overview}<br /></li> })}
        </div>
    </>
}