const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const dbName = 'flashCards';
let dbCollectionName = 'cards';

MongoClient.connect(url + dbName, (err, client) => {
  if (err) {
    console.error('Database Connection error: ' + err);
  };
  // Template
  // {
  // "front" : "Hpw do I",
  // "back": "",
  // "date" : "06 may 2018",
  // "links" : [""],
  // "image": "image.jpg",
  // "tags": ["javascript"]
  // },

  dbConnection = client.db(dbName);

  dbConnection.collection(dbCollectionName).insertMany([
    {
      "front" : "How to generate range of numbers",
      "back": [
        "Array.from(Array(10).keys());",
        "[...Array(10).keys()]",
        "Array(10).fill().map((v, i) => 4 + i * -2); // => [4, 2, 0, -2, -4, -6, -8, -10, -12, -14]"
      ],
      "date" : "06 may 2018",
      "links" : [""],
      "image": "image.jpg",
      "tags": ["javascript"]
    },
    {
    "front": "What is a controlled input (react)",
    "back": [
      "class Form extends Component {",
      "\t handleSubmitClick = () => {",
      "\t\t const name = \bthis._name.value;\b",
      "\t\t // do something with `name`",
      "\t }",
      "\n",
      "\t render() {",
      "\t\t return (",
      "\t\t\t <div>",
      "\t\t\t\t <input type=\"text\" \bref={input => this._name = input\b} />",
      "\t\t\t\t <button onClick={this.handleSubmitClick}>Sign up</button>",
      "\t\t\t </div>",
      "\t\t );",
      "\t }",
      "}"
    ],
    "date": "06 may 2018",
    "links": ["https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/"],
    "image": "image.jpg",
    "tags": ["javascript", "react"]
  },
  {
    "front": "What is a uncontrolled input (react)",
    "back": [],
    "date": "06 may 2018",
    "links": [],
    "image": "image.jpg",
    "tags": ["javascript", "react"]
  },
  {
    "front": "require a function in node.js",
    "back": [],
    "date": "06 may 2018",
    "links": [],
    "image": "image.jpg",
    "tags": ["javascript", "nodejs"]
  },
  {
    "front": "Asynchronous nodejs module exports",
    "back": [],
    "date": "06 may 2018",
    "links": [],
    "image": "image.jpg",
    "tags": ["javascript", "nodejs"]
  },
  {
    "front": " length of an object",
    "back": ["var size = Object.keys(myObj).length;"],
    "date": "06 may 2018",
    "links": ["https://stackoverflow.com/questions/5223/length-of-a-javascript-object"],
    "image": "image.jpg"
  },
  {
    "front": "How do I check if a JavaScript array value is empty or null?",
    "back": ["arr.length > 0"],
    "date": "06 may 2018",
    "links": ["https://stackoverflow.com/questions/2672380/how-do-i-check-if-a-javascript-array-value-is-empty-or-null"],
    "image": "image.jpg"
  },
  {
    "front": "A Ship in harbour is safe but that is not what ships are build for",
    "back": [],
    "date": "06 may 2018",
    "links": [],
    "image": ""
  },
  {
    "front": "How do you reverse a javascript array",
    "back": [
        "var array1 = ['one', 'two', 'three'];",
        "var reversed = array1.reverse();",
        "\n",
        "console.log(array1);",
        "// expected output: Array ['three', 'two', 'one']],"
      ],
      "date": "14 june 2018",
      "links": ["javascript", "array", "method"],
      "image": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
  },
  {
    "front": "How do you connect to a mongoDB",
    "back": ["step 1 - get mongoClient",
        ""

      ],
      "date": "15 june 2018",
      "links": ["javascript", ""],
      "image": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
  },
  {
    "front": "<picture> tag",
    "back": ["<source> </source>"],
    "date": "15 june 2018",
    "tags": ["javascript", ""],
    "links": "https://www.youtube.com/watch?v=reztLS3vomE",
    "image": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
  },
  {
    "front": "arr.slice",
    "back": [
      "arr.slice(<end>: number);",
      "arr.slice(<begin>: number, <end>: number);",
      "var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];",
      "console.log(animals.slice(2));"
    ],
    "date": "15 june 2018",
    "tags": ["javascript", "array"],
    "links": "https://www.youtube.com/watch?v=reztLS3vomE",
    "image": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
  },
  {
    "front": "arr.splice",
    "back": [
      "arr.splice(<start>: number, <deleteCount>: number, <insert>: any)",
      "deleteCount is the number of items which will be deleted from the array",
      "var months = ['Jan', 'Feb', 'March', 'April', 'June']",
      "months.splice(4, 1, 'May'); // replaces 1 element at 4th index",
      "console.log(months); // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']"
    ],
    "date": "15 june 2018",
    "tags": ["javascript", "array"],
    "links": "https://www.youtube.com/watch?v=reztLS3vomE",
    "image": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
  }
])
  client.close();
  console.info(`import complete database ${dbName} on ${url + dbName} closed`);

})
