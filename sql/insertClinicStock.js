var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lusindisomkiva',
    database: 'stockManagement'
    // your connection details here
});

var sql = "INSERT INTO clinic_stock (quantity, clinic_id, med_id) VALUES ?";
 var values =[
   [1, 1,1],
   [3, 4, 3],
   [34, 3,3],
   [2, 4, 2],
   [23, 4, 2],
   [12,4, 1]
 ];
 
conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
