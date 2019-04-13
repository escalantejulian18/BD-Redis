//incluir redis en el script
var redis = require ('redis');

//creamos el cliente
var redisCliente = redis.createClient();

redisCliente.on('connect', function(){
	console.log('¡Hola Mundo! El Servidor de Redis esta Conectado');
});

redisCliente.set("key1", "hola mundo1");
redisCliente.set("key2", "hola mundo2");
redisCliente.set("key3", "hola mundo2");

redisCliente.get("key4", function(err, value) {
    // pondrá null, si la key no existe
    console.log(value);
});


redisCliente.lpush(["key4","val1","val2","val3","val4"]);

redisCliente.lrange("key4",0,-1,function(err,values){
	console.log(values)
});