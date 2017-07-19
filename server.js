var express = require('express'),
    handlebars = require('handlebars'),
    exphbs  = require('express-handlebars'),
    myConnection = require('express-myconnection'),
    mysql = require('mysql'),
    clinics = require('./routes/clinics'),
    medicine = require('./routes/medicine'),
    clinic_stock = require('.routes/clinic_stock')

var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'lusindisomkiva',
      port: 3306,
      database: 'stockManagement'
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(myConnection(mysql, dbOptions, 'single'));

app.get("/home",function(req, res){
    res.render("home");
});

app.get('/clinics', clinics.show);

app.get('/medicine', medicine.show);

// app.get('/clinicStock', clinicStock.show);

app.set('port', (process.env.PORT || 3000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
