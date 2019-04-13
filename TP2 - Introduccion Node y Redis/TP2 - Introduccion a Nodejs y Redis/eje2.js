var express = require('express');
var server = express();

var bdredis = require ('redis');
var redisCliente = bdredis.createClient();

redisCliente.lrange("StarWars",0,-1, function(err, values){
	server.get('/', function(req, res){
		res.send(values);
	});

});
server.listen(3000);
console.log('¡Hola Mundo! El servidor esta corriendo en http://127.0.0.1:3000');
