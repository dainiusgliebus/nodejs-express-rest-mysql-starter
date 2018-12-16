Express Mysql REST API Boilerplate
==================================

This is a simple boilerplate to start building REST API with Express.

- dotenv support via [dotenv](https://github.com/motdotla/dotenv)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- gzip support via [compression](https://github.com/expressjs/compression)
- crypto support via [crypto-js](https://github.com/brix/crypto-js)
- JWT token support via [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- mysql2 support via [mysql2](https://github.com/sidorares/node-mysql2)


Getting Started
---------------

```sh
# clone it
git clone git@github.com:dainiusgliebus/nodejs-express-rest-mysql-starter
cd nodejs-express-rest-mysql-starter

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Create mysql database and copy sql to database from sql/users.sql
# Copy .env.example to .env and update with local parameters
cp .env.example .env

# Run test
npm run test

# Run test-reload
npm run test-watch

# Start development live-reload server
npm run dev

# Start production server:
npm start
```

Local Parameters
---------------
```
# app env mode
NODE_ENV=development
# app debug mode
DEBUG=true
# app password secret
APP_SECRET=itsverysecret
# server port
SERVER_PORT=3000
# jwt secret
JWT_SECRET=itsverysecret
# jwt expire time in seconds
JWT_EXPIRE=3600

# mysql parameters for read and write options
DB_READ_HOST=localhost
DB_WRITE_HOST=localhost
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=root
DB_PASSWORD=
```

Routes
---------------
```

# login to app to get bearer token
POST /auth/login 
# validate bearer token
GET  /auth/me
```

License
-------

MIT