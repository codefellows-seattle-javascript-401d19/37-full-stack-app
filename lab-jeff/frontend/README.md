# 401 JS lab 40 - Full Stack FileReader

## Purpose

The purpose of this lab is to hook up our backend from lab 14 to a new front-end. The App requires log in. Upon logging in, the user can select a wav file and a transform. When submitted, the wave will be transformed and can be played with the onscreen player or downloaded by clicking the link.

## To use

### Setup

Download the contents of the repo.

use npm to install dependencies in both the frontend folder and the backend folder.

Create a .env file in the root of the frontend folder with the following contents:

      API_URL=http://localhost:3000
      CDN_URL=/
      NODE_ENV=debug

Create a .env file in the root of the backend folder with the following contents:
AWS_ACCESS_KEY_ID=
AWS_BUCKET=
AWS_SECRET_ACCESS_KEY=
SECRET_SALT=supersecret
MONGODB_URI=mongodb://localhost/test
PORT=3000
The user will need to set up an account with AWS S3, create a bucket, and get the keys in the env above.

### Running the servers

Open 2 terminal tabs within backend folder. In one, type `npm run dbon`. In the other, type `npm run start`.

Open 1 terminal tab within the frontend folder. Type `npm run watch`.

### Using the app

Open a web browser at http://localhost:8080 .
Click 'signup' if you have not signed up before. Enter a username, password, email. A token will be returned and saved to state.token.
Click 'login' if you have signed up before. Enter your username and password. A token will be returned and saved to state.token.
Click the 'transform a wave' link. Select a wave to transform. Select a transform to apply. The wavename field is optional. Click submit. See the README.md file in the backend folder for more detailed information.
