'use strict';
const express = require('express');
const app = express();
const chatCat = require('./app');

app.set('port',process.env.PORT || 3001);
app.set('view engine','ejs');
//uses stream to prcocess al the file request itslef a server instance doesnot come up with the application instance
//hence needed to declared explicilty
app.use(express.static('public'));
//midlleware which uses '/' root and then invokechatCat.router as required but only routes matching that will get invoke
//just to have manageable units and divie each and every thing we have the concept for router
app.use('/',chatCat.router);
app.listen(app.get('port'),function(){
  console.log('server running on port', app.get('port'));
})
