var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "10.5.32.195",
    post: 3306,
    user: "root",
    password: "aA111111",
    database: "mysql"
})
connection.connect();
connection.query("select * from loginusers", function(error, results, field){
    if(error){
        console.log(error);
    }
    console.log(results);
    console.log(field);
})