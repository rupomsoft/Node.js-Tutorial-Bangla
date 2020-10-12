var MongoClient=require('mongodb').MongoClient;

var URL="mongodb+srv://rabbildemo:HbU4xB6HVLq8cRZ2@cluster0.w4qrh.mongodb.net?retryWrites=true&w=majority";

var config= { useUnifiedTopology: true };

MongoClient.connect(URL,config,function (error,MyMongoClinet) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");

        //InsertData(MyMongoClinet);
        //DeleteOneItem(MyMongoClinet);
        //DeleleAllItem(MyMongoClinet);

        //FindOneWithoutCondition(MyMongoClinet)

        //FindOneWithCondition(MyMongoClinet);


       // FindAllData(MyMongoClinet)
       // FindAllDataByProjection(MyMongoClinet);

       // FindAllDataByQuery(MyMongoClinet)

        //FindAllDataByLimit(MyMongoClinet)

        FindAllDataBySort(MyMongoClinet);


    }
});


function InsertData(MyMongoClinet){
   var MyDataBase= MyMongoClinet.db("school");
   var MyCollection= MyDataBase.collection('students');
   var MyData={name:"Rabbil",Roll:"01",Class:"Ten",City:"Dhaka"};
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




function FindOneWithoutCondition(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');
    var FindObj={}
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result);
    })
}


function FindOneWithCondition(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');
    var FindObj={Roll: "05"}
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result);
    })
}


function FindAllData(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');
    MyCollection.find().toArray(function (error,result) {
        console.log(result)
    })
}


function FindAllDataByProjection(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');

    var ItemObj={}
    var ItemProjection={projection:{Class:"",Roll:""}}

    MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result) {
        console.log(result)
    })
}

function FindAllDataByQuery(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');

    var Query={Roll :"01",City: "Rangpur"}

    MyCollection.find(Query).toArray(function (error,result) {
        console.log(result)
    })
}



function FindAllDataByLimit(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');

    MyCollection.find().limit(20).toArray(function (error,result) {
        console.log(result)
    })
}


function FindAllDataBySort(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');

    var SortPattern={Class :-1}

    MyCollection.find().sort(SortPattern).toArray(function (error,result) {
        console.log(result)
    })
}
