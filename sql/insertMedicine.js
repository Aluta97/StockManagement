var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'stockManagement'
    // your connection details here
});

var sql = "INSERT INTO medicine (name, strength) VALUES ?";

var values = [
  ['NEVIRAPINE', '100mg'],
  ['STAVUDINE', '30mg'],
  ['ZIDOTABINE', '60mg']
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
