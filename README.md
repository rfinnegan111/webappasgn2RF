# Assignment 2 - Web API.

Name: Rebecca Finnegan

## Features.

Other than the implemented lab features, the following have also been implemented for use:

 + Feature 1 - Get Upcoming Movies: Gets and displays a list of upcoming movies using a movie ID that the user may potentially be interested in

 + Feature 2 - Get TV Series: Gets and displays a list of tv series using a tv ID

 + Feature 3 - ......

## Installation Requirements
For the purpose of this assignment the following was carried out:

 + The API lab git repository I had completed was cloned as  abase start for the assignment.

 + Node version 18.12.1 was installed, with this being the most recent version of the software.

 + MongoDB version 4.4.18 was installed onto the host system to ensure Mongo and Mongoose implementation would be possible, once completed the commands mongod.exe and mongo.exe were run and the software was added to the system enviroment variables for easy use.

 + NPM was installed using the command "npm install" in both the movies-api and the react app folders and the command "npm run" was run on both folders in unison.

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

## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
For the purpose of this assignment a relatively basic level of authenticaton was implemented into the app. This meant that users were required to log in and be authenticated by the system to access the pages protected by private routes, which included - Movies, Profile, Upcoming Movies and TV Series pages. Without the system recognising them they could access the public, home, login and sign up pages as intended. The use of passports and sessions were also both implemented to aid security. 

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

API Call from React App Example for Upcoming Movies: 

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