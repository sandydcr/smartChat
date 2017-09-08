'use strict'
const route = require('../helper');

module.exports = function(){
  let routes = {
    'get' :{
      '/':function(req, res, next){
        res.render('login');
      },
      '/home':function(req, res, next){
        res.render('rooms');
      }

    },
    'post':{

    },
    'NA':{function(req, res, next){
      res.status(404).sendFile(process.cwd() + '/views/404.htm');
    }

    }
  }
   return route.route(routes);

}
