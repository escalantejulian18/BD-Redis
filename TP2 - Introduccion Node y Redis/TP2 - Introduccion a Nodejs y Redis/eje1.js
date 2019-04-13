var bdredis = require ('redis');
var redisCliente = bdredis.createClient();
redisCliente.on('connect', function(){
	console.log('¡Hola Mundo! El Servidor de Redis esta conectado');
});

redisCliente.del("StarWars");
redisCliente.lpush(["StarWars","1997 - Star Wars 1: La amenaza fantasma"]);
redisCliente.lpush(["StarWars","2002 - Star Wars 2: El ataque de los clones"]);
redisCliente.lpush(["StarWars","2005 - Star Wars 3: La venganza de los Sith"]);
redisCliente.lpush(["StarWars","1977 - Star Wars 4: Una nueva esperanza"]);
redisCliente.lpush(["StarWars","1980 - Star Wars 5: El Imperio contraataca"]);
redisCliente.lpush(["StarWars","1983 - Star Wars 6: El retorno del Jedi"]);
redisCliente.lpush(["StarWars","2015 - Star Wars 7: El despertar de la Fuerza"]);
redisCliente.lpush(["StarWars","2017 - Star Wars 8: Los últimos Jedi"]);

redisCliente.lrange("StarWars",0,-1,function(err,values){
	console.log("Peliculas StarWars",values);
});

//
