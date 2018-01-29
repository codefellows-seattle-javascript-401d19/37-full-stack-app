# Lab 40: Full Stack App

## To check the functionality of this assignment start things as follows:

### Backend

1. `cd` into `lab-rob/backend`
2. `yarn` to install dependencies (or maybe try `npm i` if you don't have yarn)
3. `touch .env`
4. paste the following into `.env`, but add your actual AWS info:

    ```
    PORT=3000 
    DEBUG=true
    CORS_ORIGINS=http://localhost:8080
    MONGO_URI=mongodb://localhost/sluggram
    SECRET=superSecret
    AWS_ACCESS_KEY_ID='<a aws access key id>'
    AWS_SECRET_ACCESS_KEY='<a aws secret access key>'
    AWS_BUCKET='<a aws bucket>'
    ```

5. `yarn dbon` or `npm run dbon` to start the database
6. `npm run start` or `yarn start` to start the backend

### Frontend

1. `cd` into `lab-rob/frontend`
2. `npm i` to install dependencies
3. `touch .env`
4. paste the following into `.env`:

    ```
    API_URL=http://localhost:3000
    CDN_URL=/
    NODE_ENV=debug
    ```

5. `npm run watch` to start webpack-dev-server
6. go to `localhost:8080` to access the landing page, signup, and login forms.