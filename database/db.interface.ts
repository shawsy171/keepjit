export interface DBQuery {
  front?: number;
}

export interface DBConnection {
  dbConnection: any;
  dbClient: any;
}

export interface newCard {
  question: string,
  answer: string,
  tags: string,
  type: string
}
// export interface newCard {
//   [prop: string]: any;
// }

