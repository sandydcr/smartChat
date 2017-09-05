'use strict';
const express = require('express');
const app = express();

app.set('port',process.env.PORT || 3001);
app.set('view engine','ejs');
//uses stream to prcocess al the file request itslef a server instance doesnot come up with the application instance
//hence needed to declared explicilty
app.use(express.static('public'));

app.get('/',function(req, res,next){
  //res.send('hello express');
  //res.sendFile(__dirname +'/view/login.htm');
  res.render('login');
})

app.listen(app.get('port'),function(){
  console.log('server running on port', app.get('port'));
})
