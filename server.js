const express = require('express');
const cors = require('cors');
const config = require('./config/app.js');
const compression = require('compression');
const routes = require('./routes');
const errorHandler = require('express-json-errors');
const middlewareErrorParser = require('./middleware/ErrorParser');
const middlewarePathLogger = require('./middleware/PathLogger');

const app = express();

app.use(express.json({type: "application/json"}));
app.use(express.urlencoded({ extended: false }));

// add cors headers
app.use(cors());
// comporess output
app.use(compression());

// only on debug mode
if(config.debug){
    // path logger
    app.use(middlewarePathLogger);
}

// use routes
app.use('/', routes);

app.use(middlewareErrorParser);

// Start server
app.listen(config.port, () => {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
module.exports = app;