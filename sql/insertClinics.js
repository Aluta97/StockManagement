var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'stockManagement'
    // your connection details here
});

var sql = "INSERT INTO clinics (name, phoneNUmber) VALUES ?";

var values = [
  ['Khayelitsha', 0213444333],
  ['Langa', 0212323233],
  ['gugulethu', 0213434343],
  ['stellenbosch', 0215556789],
  ['century city', 0215514565],
  ['kaya mnandi', 0215672234],
  ['nyanga', 0218763456],
  ['cape town', 0214414576],
  ['milnerton', 0215112321],
  ['waterfront', 0215673455]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
