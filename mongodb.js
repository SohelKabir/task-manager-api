// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

//shorthand

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)


    //Fetching Document

    // db.collection('users').findOne({_id: new ObjectID("5d8f7d291bbc62217cb45a08")}, (error, user) =>{
    //     if(error){
    //         return console.log('Unable to fetch');
            
    //     }
    //     console.log(user);
        

    // })


    // db.collection('users').find({age:27}).toArray((error, users) => {
    //     console.log(users);
        
    // })

    // db.collection('users').find({age:27}).count((error, count) => {
    //     console.log(count);
        
    // })


    //challenge

    //  db.collection('tasks').findOne({_id: new ObjectID("5d8f896648639f37482a852f")}, (error, task) =>{
    //     if(error){
    //         return console.log('Unable to fetch');
            
    //     }
    //     console.log(task);


    // })
    
    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks);
        
    // })


    //Inserting  Document
    
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if(error){
    //          return console.log('Unable to insert user')
            
    //     }
    //     console.log(result.ops);
        
    // })

    // Bulk insert

    //  db.collection('users').insertMany([
    //      {
    //          name: 'jen',
    //          age: 28
    //      },
    //      {
    //         name: 'Gunther',
    //         age: 27
    //      }
    //  ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert');
            
    //     }
    //     console.log(result.ops);
        
    //  })

    //challenge

    //   db.collection('tasks').insertMany([
    //      {
    //          description: 'Clean the house2',
    //          completed: true
    //      },
    //      {
    //         description: 'Renew inspection2',
    //          completed: false
    //      },
    //      {
    //         description: 'Pot plats2',
    //         completed: false
    //      }
    //  ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks');
            
    //     }
    //     console.log(result.ops);
        
    //  })



    //update documents

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d8f8731e3d7d60674acb412")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc:{
    //         age: 1
    //     }
    // }).then((result) =>{
    //     console.log(result);
        
    // }).catch((error) =>{
    //     console.log(error);
        
    // })

    //challenge updateMany

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
        
    // }).then((result) => {
    //     console.log(result.modifiedCount);
        
    // }).catch((error) =>{
    //     console.log(error);
        
    // })

    //deleteMany

    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result) =>{
    //     console.log(result);
        
    // }).catch((error) =>{
    //     console.log(error);
        
    // })

    //challenge deleteOne 

   db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) =>{
        console.log(result);
        
    }).catch((error) =>{
        console.log(error);
        
    })



})