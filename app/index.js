'use strict'
//we call an instance of router (it self a middleware )which is running over the express core module
//const router = require('express').Router();
module.exports={
  router : require('./routes/routes')()
}
