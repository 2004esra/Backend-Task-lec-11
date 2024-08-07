const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname ='proj-1'

mongoClient.connect(connectionUrl , (error , res1) => {
    if(error){
        return console.log("error has occuerd")
    }
    console.log('all perfect')

    const db = res1.db(dbname)

    db.collection('users').insertOne({
        name : 'Esraa',
        age : 20         
    } , (error , data) => {
        if(error){
            console.log(("Unable to insert data"))
        } console.log(data.insertedId)
    }) 

    db.collection('users').insertOne({
        name : "Osama",
        age : 25         
    } , (error , data) => {
        if(error){
            console.log(("Unable to insert data"))
        } console.log(data.insertedId)
    }) 
    //////////////////////////////////////////////////

    db.collection('users').insertMany(
        [
            {
                name : 'Ali',
                age : 27
            },
            {
                name : 'Islam',
                age : 27
            },
            {
                name : 'Khalid',
                age : 27
            },
            {
                name : 'Mohamed',
                age : 27
            },
            {
                name : 'Maram',
                age : 27
            },
            {
                name : 'Hafsa',
                age : 20
            },
            {
                name : 'Shimaa',
                age : 26
            },
            {
                name : 'Ahmed',
                age : 30
            },
            {
                name : 'Hosaam',
                age : 22
            },
            {
                name : 'Mariem',
                age : 26
            }
            
        ] , (error , data) => {
            if(error){
                console.log('Unable to insert data')
            }
            console.log(data.insertedCount)
        }
    )

/////////////////////////////////////////////////////////

    db.collection('users').find({age : 27}).toArray((error , users)=>{
        if(error){
            return console.log('error has occured')
        }
        console.log(users)
    })

///////////////////////////////////////////////////////

    db.collection('users').find({age:27}).limit(3).toArray((error , users)=> {
        if(error){
            return console.log('error has occured')
        }
        console.log(users)
    })

    ////////////////////////////////////////////////

    

    db.collection('users').find({}).limit(4).toArray((error , users)=>{
        if(error){
            return console.log('error has occuerd')
        }
        
        const usersId = users.map(user => user._id)

            db.collection('users').updateMany({_id:{ $in: usersId }} , {
                $set:{name : 'Aya'}
            }).then((data)=>{console.log(data.modifiedCount)})
            .catch((error)=>{console.log(error)})

        
    })

    
    /////////////////////////////////////////////////////


    db.collection('users').find({}).limit(4).toArray((error , users)=>{
        if(error){
            return console.log('error has occuerd')
        }
        
        const userIds = users.map(user => user._id)

            db.collection('users').updateMany({_id:{ $in: userIds }} , {
                $inc:{age : 4 }
            }).then((data)=>{console.log(data.modifiedCount)})
            .catch((error)=>{console.log(error)})
        })

        //////////////////////////////////////////////////

      db.collection('users').updateOne({} , {
        $inc:{age: 5}

      }).then((data)=>{console.log(data.modifiedCount)})
      .catch((error)=>{console.log(error)})

    ///////////////////////////////////////////////
    db.collection('users').updateMany({} , {
        $inc: {age : 10}
    }).then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})


           

   ////////////////////////////////////////////////////////
      

   db.collection('users').deleteMany({age : 41})
   .then((data)=>{console.log(data.deletedCount)})
   .catch((error)=> {console.log(error)})

})

