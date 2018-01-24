# Lab 37: Full Stack App

## To check the functionality of this assignment start things as follows:

### Backend

1. `cd` into `lab-rob/backend`
2. `npm i` to install dependencies
3. `touch .env`
4. paste the following into `.env`, replacing the variables:

    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost/<anything>
    SALT_SECRET=<anything>
    TWILIO_SID=<anything for now>
    TWILIO_TOKEN=<anything for now>
    TWILIO_PHONE_NUMBER=<anything for now>
    ```

5. `npm run dbon` to start the database
6. `npm run start` or `nodemon` to start the backend

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
6. go to `localhost:8080` to access the landing page, signup, and login forms. You can add a company to the backend. Make sure phone number is a valid phone number or it will get rejected and throw an error. Upon success you will receive a token and be redirected to the dashboard. Refresh the page and you can log back in with your same username and password. If you want, you can see the account you created using Robo 3T.