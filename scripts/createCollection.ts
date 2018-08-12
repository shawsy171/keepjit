// import { DBQuery, DBConnection, newCard } from './db.interface';
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const dbName = '';

let dbConnection: any;
let dbClient: any;

MongoClient.connect(url + dbName, (err: any, client: any) : void => {
  if (err) {
    console.log('Database Connection error: ' + err);
  };

  dbClient = client;
  dbConnection = client.db(dbName);

  dbConnection.collection('contests').insertMany([{
    id: 1,
    categoryName: 'Business/Company',
    contestName: 'Cognitive Building Bricks',
    description: `This product is a classroom tool that scaffolds 
      higher order thinking. Its a collaborative strategy that using 
      building bricks to help structure students ideas. 
      Learners build knowledge structures with information 
      (attached to different coloured bricks). Students desks are 
      turned into workshops where they physically manipulate information 
      into meaningful creations. They show sequences of information 
      (like stories), rank information by importance and pretty much all other 
      essential cognitive skills you need at school. The end result is 
      clarity in thought and better collaborative conversations. I want this to 
      be marketed as a sophisticated knowledge tool applicable to all ages 
      and subjects. It gives students the cognitive edge, they get a little 
      more 'RAM'!.

      I want to continue with the construction/building theme as well as the 
      mind/brain/learning theme. They need to be blended somehow. Teachers 
      find it easier to talk about building/scaffolding analogies as its less 
      abstract.
      `,
    nameIds: [101, 102],
  }])

  console.log(`Connected to: ${dbName} on ${url + dbName}`);
  
})
