import React from "react";
  import ReactDOM from "react-dom";
  import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
  import { PublicPage, Movies, Profile, HomePage, UpcomingMovies, Tvs } from "./pages";
  import LoginPage from "./loginPage";
  import AuthProvider from "./authContext";
  import PrivateRoute from "./privateRoute";
  import AuthHeader from "./authHeader";
  import SignUpPage from "./signUpPage";
  import MovieProvider from "./moviesContext";
  import UpcomingMovieProvider from "./upcomingMoviesContext";
  import TvProvider from "./tvsContext";
  import "./css/\style.css"

  const App = () => {
    return (
      <BrowserRouter>
        <AuthProvider>
          <AuthHeader />
          <div class="topnav">
            <a href="#home"><Link to="/">Home</Link></a>
            <a href="#public"><Link to="/public">Public</Link></a>
            <a href="#profile"><Link to="/profile">Profile</Link></a>
            <a href="#movies"><Link to="/movies">Movies</Link></a>
            <a href="#upcoming"><Link to="/upcoming">Upcoming Movies</Link></a>
            <a href="#tvs"><Link to="/tvs">Tv Series</Link></a>
          </div> 
          <UpcomingMovieProvider>
          <MovieProvider>
            <TvProvider>
            
          <Switch>
            <Route path="/signup" component={SignUpPage} />
            <Route path="/public" component={PublicPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/movies" component={Movies} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/upcoming" component={UpcomingMovies} />
            <PrivateRoute path="/tvs" component={Tvs} />
            <Redirect from="*" to="/" />
          </Switch>
          
          </TvProvider>
          </MovieProvider>
          </UpcomingMovieProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));