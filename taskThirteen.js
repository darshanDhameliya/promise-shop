'use strict';

var http = require('q-io/http')
http.read("http://localhost:7000")
.then(function(result){
   return http.read("http://localhost:7001/"+result);
})
.then(function(result){
   console.log(JSON.parse(result))
})
.catch(function(err){
   console.log(err)
})