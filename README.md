# Installation

1. Install packages
    - `npm install`
2. Run server
    - `npm start` OR `node app.js`

Server should now be running on `localhost:3003`.

## Endpoints
- `GET /desserts`
    - No cookie: Returns a list of desserts.
    - personalPreference cookie: Returns a filtered list of desserts by "type"
