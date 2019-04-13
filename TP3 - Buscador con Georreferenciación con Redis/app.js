
var bodyParser  = require('body-parser'),
    express     = require('express'), // Servidor Web
    redis       = require('redis'), // Gestion de BD Redis
    app = express();

  // Creamos el servicio de redis
var cliente = redis.createClient();

  app.set('view engine', 'pug'); //asociamos el modulo pug

  // método "get"
  //  valor a la plantilla aquí.
  app.get('/',function(req, res) {
                res.render('index', {
                pageTitle: 'Buscador de Universidades'
                });
            }
  );

// método "post"
app.post('/', bodyParser.urlencoded({
                    extended : false
                  }),
    //
    function(req,res,next) {
      var latitude  = req.body.latitude;
      var longitude = req.body.longitude;
      cliente.georadius('va-universidad', longitude, latitude, '100',
                        'mi', 'WITHCOORD','WITHDIST', 'ASC',
                        function(err, results) {
                            if (err) {
                              next(err);
                            } else {
                                    results = results.map(function(result) {
                                      var
                                        resultObject = {
                                          key : result[0],
                                          distance  : result[1],
                                          longitude : result[2][0],
                                          latitude  : result[2][1]
                                        };

                                      return resultObject;
                                      });
                                      res.render('index', {
                                        pageTitle : 'Universidades',
                                        latitude  : latitude,
                                        longitude : longitude,
                                        results   : results
                                      });
                                    }
                      });
    });

app.listen(3000, function () {
  console.log('Buscador corriendo en http://localhost:3000/');
});
