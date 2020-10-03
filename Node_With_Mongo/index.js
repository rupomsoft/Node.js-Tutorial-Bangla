var MongoClient=require('mongodb').MongoClient;

var URL="mongodb+srv://rabbildemo:HbU4xB6HVLq8cRZ2@cluster0.w4qrh.mongodb.net?retryWrites=true&w=majority";

var config= { useUnifiedTopology: true };

MongoClient.connect(URL,config,function (error,MyMongoClinet) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");
      // InsertData(MyMongoClinet);
       // DeleteOneItem(MyMongoClinet);


     DeleleAllItem(MyMongoClinet);


    }
});


function InsertData(MyMongoClinet){
   var MyDataBase= MyMongoClinet.db("school");
   var MyCollection= MyDataBase.collection('students');
   var MyData={name:"Rabbil",Roll:"04",Class:"Ten",City:"Dhaka"};
   MyCollection.insertOne(MyData,function (error) {
       if(error){
           console.log("Data Insert Fail");
       }
       else{
           console.log("Data Insert Success");
       }
   })
}



function DeleteOneItem(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');
    var DeleteItem={Roll:"02"}
    MyCollection.deleteOne(DeleteItem,function (error) {
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            console.log("Data Delete Success");
        }
    });
}


function DeleleAllItem(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');
    MyCollection.deleteMany(function (error,ResultObj){
        if(error){
            console.log("Delete Fail");
        }
        else {
            console.log(ResultObj.result.n +" Item Deleted");
        }
    })
}



