var mysql=require('mysql');

var DatabaseConnectionConfig={host:"localhost", user:"root", password:"", database:"school"}

var con=mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");
        //InsertData(con);
        //DeleteDataByID(con)
       //UpdateData(con);



    }
});


function InsertData(con) {
    let SQLQuery="INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Rabbil','03','Ten','017000000','Dhaka')"
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data insert fail");
        }
        else{
            console.log("Data insert success");
        }
    })
}


function DeleteDataByID(con) {
    let SQLQuery="DELETE FROM `students_list` WHERE `id`='2'";
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data Delete fail");
        }
        else{
            console.log("Data Delete Success");
        }
    })
}



function UpdateData(con) {
    let SQLQuery="UPDATE `students_list` SET `phone`='11111111111',`city`='Rangpur' WHERE `id`='4'";
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data Update fail");
        }
        else{
            console.log("Data Update Success");
        }
    })
}




function SelectData(con) {
    let SQLQuery="SELECT * FROM `students_list`";
    con.query(SQLQuery,function (error,result) {

        if(error){
            console.log("Data Select Fail")
        }
        else {
            console.log(result)

        }

    })
}














