# Full Stack App

Basic and Bearer auth set up for login / sign up

# Tech Used

- Node
- Express
- MongoDB
- jest
- enzyme
- react
- redux
- superagent
- JWT

# Features

Allows for a token to be created upon signup.

Allows for a token to be returned from server upon login.

Requires username, password and email for basic auth.

Backend handles the auth process

# Setup

In the backend directory:
`run npm dbon`
`run npm start`

In the frontend directory:
`run npm watch`

You'll also need to set up a `.env` file in both the frontend and backend directories

### Backend

```
// test credentials
PORT=<PORT NAME>
TWILIO_ACCOUNT_SID=ACd6c663b4ec598ea6e52704c7abca5668
API_KEY=<insert your meetup API key here>
CORS=<DOMAIN:PORT OF SERVER >
```

### Frontend

```
API_URL=<DOMAIN:PORT OF CLIENT>
NODE_ENV=debug
```

# Tests

All tests written in jest

# Credits

Cameron Moorehead

# License

GPL-3.0
