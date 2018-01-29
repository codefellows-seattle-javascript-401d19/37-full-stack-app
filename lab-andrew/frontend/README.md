# Lab 37 Full Stack Signup/Login

## Overview

This is the front end for the scrambleVox application. Upon arrival, a user will be welcomed and asked to login or signup. If they are successful, they will be returned a token, and will be redirected to the dashboard. The user's favorites model will be retrieved from the dashboard, and they have the opportunity to add a memo in the 'notes' area. On the dashboard, if a user has a saved wave file, they can listen to it. If not, a message will be displayed for them to upload a file. On the upload page, a user can upload a wav file, choose a name and a transform and submit it. They will be redirected to the dashboard where they will be able to play or download their transformed wave from the embedded player.

***
## Getting Started

To get started using this application, familiarity with node and npm, as well as git is assumed. Fork/clone this repo to your machine, and do an `npm i`. Also navigate to the backend folder and do the same. Follow the directions in the server readme to start Mongo and run the server. To view on localhost in your browser, type `npm run watch`. To run front-end tests, make sure you run `npm i -D` and the server and mongo is running. Then type `npm run test`. 
***
## Technology/Credits

Created by Andrew Bloom. Using react, redux, babel, webpack, et al. See package.json for details.

