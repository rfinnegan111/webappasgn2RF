# Assignment 2 - Web API.

Name: Rebecca Finnegan (20093862)

## Features.

Other than the implemented lab features, the following have also been implemented for use:

 + Feature 1 - Upcoming Movies Page: Gets a list of Upcoming movies from TMDB's API that the user may potentially be interested in and gives some details.

 + Feature 2 - TV Series Page: Gets a list of TV Series from TMDB's API of top-rated televison series and gives some details.

 + Feature 3 - Updated Movies Page: Movies Page now also reads from TMDB's API and gets a list of popular films.

## Installation Requirements
For the purpose of this assignment the following was carried out:

 + The API lab git repository I had completed was cloned as a base start for the assignment.

 ```bat
git clone https://github.com/rfinnegan111/webappdev2-api-labs-2022-rf
```

 + Node version 18.12.1 was installed, with this being the most recent version of the software.

 + MongoDB version 4.4.18 was installed onto the host system to ensure Mongo and Mongoose implementation would be possible, once completed the commands mongod.exe and mongo.exe were run and the software was added to the system enviroment variables for easy use. The database directory path also ad to be initialized: 

 ```bat
    mkdir db
    mongod -dbpath db
```

 + NPM was installed using the command "npm install" in both the movies-api and the react app folders and this had to be run on both folders in unison.

  ```bat
    npm start
```

## API Configuration
Before runing the API, of course a ``.env`` file needed to be implmented, as shown below. However once change had to be made from the inital file of the same type used in the labs, due to some breaking isssues with Node past version 17 and newer, the Mongo URL had to be changed to reflect the host to that of 127.0.0.1:27017 to allow for the functioning of Mongo and Mongoose. 

```bat
NODE_ENV=development
PORT=8080
HOST= _ _ _ _ _
MONGO_DB=mongodb://127.0.0.1:27017/_ _ _ _ _ db
SEED_DB=True
SECRET= _ _ _ _ _ _ _
API_KEY= _ _ _ _ _ _ _
```
There have also been soem issues with Node and running the requried commands:
 ```bat
    npm start
```
To fix this issue the command below must first be run in the reactApp folder from the command prompt in the terminal:
 ```bat
    set NODE_OPTIONS=--openssl-legacy-provider
```

## API Design
API Design Overview:

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/upcoming |Gets a list of upcoming movies | N/A | N/A |
| /api/tvs |Gets a list of TV Series | N/A | N/A |
| /api/tvs/{tvid} | Get a Series | N/A | N/A | N/A
| /api/tvs/{tvid}/reviews | Get all reviews for a Series | Create a new review for a Series | N/A | N/A  
| ... | ... | ... | ... | ...

## Security and Authentication
For the purpose of this assignment a relatively basic level of JWT-based Authenticaton was implemented into the app. JSON web tokens are used through every request using authentication and Passport is used throughout to check tokens when accessing the pages protected by private routes, which included - Movies, Profile, Upcoming Movies and TV Series pages. Without the system recognising them they could access the public, home, login and sign up pages as intended. Should the user note have authentication they would be redirected to a login page.

## Integrating with React App
​The basic React App was integrated with the API at the location: reactApp/src/api/movie-api.js

With this file, if a function is required it should call on information from its sought after location, example: /api/tvs . If the information is protected by a private route and requires authorization, the user is required to log in and receive their JWT token.  

API Call from React App, Example for Upcoming Movies: 

~~~Javascript
  export const getUpcoming = () => {
    return fetch(
       '/api/movies/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

## Extra features

Not applicable.

## Independent learning.

Not applicable.