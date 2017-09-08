'use strict'
const router = require('express').Router();


let _registerRoutes  = function(routes,method){
  for(let key in routes){
    if(typeof routes[key]=='object' && routes[key]!=null ){
      _registerRoutes(routes[key], key);
    }else{//register the routes
      if(method=='get'){
        router.get(key,routes[key]);
      }else if(method=='post'){
        router.post(key,routes[key]);
        }
        else{router.use(routes[key]);}
    }
  }
}

let route = function(routes){
  _registerRoutes(routes);
  return router;
}
module.exports = {
  route: route
}
