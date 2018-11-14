import { DBQuery, DBConnection, newCard } from './db.interface';
import { ObjectId, MongoClient } from 'mongodb';

interface CardId {
  id: string
}

const url = 'mongodb://localhost:27017';

const dbName = 'flashCards';

const collectionName = 'cards';

let dbConnection: any;
let dbClient: any;
let isConnecting: boolean;

export const connectToMongoDB = () : Promise<DBConnection | string> => {

  return new Promise((resolve: any, reject: any) : void => {

    if (dbClient) {
      isConnecting = false;
      resolve({ dbConnection, dbClient });
    }

    if (!isConnecting) {
      isConnecting = true;

      MongoClient.connect(url, { useNewUrlParser: true }, (err: any, client: any) : void => {
        if (err) reject('Database Connection error: ' + err);

        dbClient = client;
        dbConnection = client.db(dbName);

        console.log(`Connected to: ${dbName} on ${url}`)
        resolve({ dbConnection, dbClient });
      })
    }

  })
}

export const findDocuments = (query: DBQuery, res: any) : void => {
  connectToMongoDB()
    .then((result) : void => {
      if (typeof result !== 'string') {
        const { dbConnection, dbClient } = result;

        // get access to the collection in the database
        const collection = dbConnection.collection(collectionName);

        // find all documents
        collection.find(query).toArray((err: any, docs: any) => {
          if (err) ('Database error: ' + err);

          dbClient.close();
          // send docs
          res.send(docs);
          return docs;
        });
      }
    }).catch((err) => {
      console.log(err);
    });
}
export const findOneDocument = (cardId: CardId, res: any) : void => {
  const { id } = cardId;
  connectToMongoDB()
    .then((result) : void => {
      if (typeof result !== 'string') {
        const { dbConnection, dbClient } = result;

        const collection = dbConnection.collection(collectionName);

        collection.findOne({_id: new ObjectId(id)}, (err: any, result: any) => {
          if (err) {
            return console.log('error: ' + err)
          }
          // console.log('result', result);
          res.send(result);

        })

        // .then((res: any) => {
        //    console.log('res', res);
        // }).catch((err: any) => {
        //   console.log(err);
        // })
      }
    }).catch((err) => {
      console.log(err);
    })
}

export const addOneDocument = (newDocument: newCard) : void => {
  connectToMongoDB()
    .then((result) : void => {
      if (typeof result !== 'string') {
        const { dbConnection, dbClient } = result;

        const collection = dbConnection.collection(collectionName);

        collection.insertOne(newDocument)
      }
    }).catch((err) => {
      console.log(err);
    })
}

export const updateDocument = () : void => {
  connectToMongoDB()
    .then((result) : void => {
      if (typeof result !== 'string') {
        const { dbConnection, dbClient } = result;

        const collection = dbConnection.collection(collectionName);

        collection.update({_id: new ObjectId("5b3030a7c9759f877c3cea22")}, {
          $set: {
            tourName: 'Updated Name'
          }
        })
      }
    }).catch((err) => {
      console.log(err);
    })
}


export const removeOneDocument = (cardId: CardId) : void => {
  const { id } = cardId;
  connectToMongoDB()
    .then((result) : void => {
      if (typeof result !== 'string') {
        const { dbConnection, dbClient } = result;

        const collection = dbConnection.collection(collectionName);

        collection.remove({_id: new ObjectId(id)})
      }
    }).catch((err) => {
      console.log(err);
    })
}