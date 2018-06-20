import { DBQuery, DBConnection } from './db.interface';
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'learning_mongo';

const collectionName = 'tours';

let dbConnection: any;
let dbClient: any;
let isConnecting: boolean;

export const connectToMongoDB = () : Promise<DBConnection | string> => {

  return new Promise((resolve: any, reject: any) => {
    console.log('Start', { dbConnection, dbClient });
    console.log('isConnecting', isConnecting);
    
    if (dbClient) {
      isConnecting = false;
      resolve({ dbConnection, dbClient });  
    }

    if (!isConnecting) {
      isConnecting = true;

      MongoClient.connect(url, (err: any, client: any) => {
        if (err) reject('Database Connection error: ' + err);
  
        dbClient = client;
        dbConnection = client.db(dbName);
  
        console.log(`Connected to: ${dbName} on ${url}`)
        resolve({ dbConnection, dbClient });
      })
    }
    
  })
}

export const findDocuments = (query: DBQuery) => {
  connectToMongoDB()
    .then(({ dbConnection, dbClient }) => {
      const collection = dbConnection.collection(collectionName);
   
      collection.find(query).toArray((err: any, docs: any) => {
        if (err) ('Database error: ' + err);
        console.log(docs.length);
        dbClient.close();
      })
    }).catch((err) => {
      console.log(err);
    })
  
}

findDocuments({ tourPrice: 800 });