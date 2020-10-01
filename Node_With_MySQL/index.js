var mysql=require('mysql');

var DatabaseConnectionConfig={host:"localhost", user:"root", password:"", database:"school"}

var con=mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");
        InsertData(con);
    }
});


function InsertData(con) {
    let SQLQuery="INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Rabbil','01','Ten','017000000','Dhaka')"
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data insert fail");
        }
        else{
            console.log("Data insert success");
        }
    })
}

















