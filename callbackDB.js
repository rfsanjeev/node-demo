let mysql = require('mysql');
let sql = 'SELECT * FROM a';

let con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ''
});

con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
});

console.log(`The Sum of 2 + 3 is  ${2 + 3}`);

