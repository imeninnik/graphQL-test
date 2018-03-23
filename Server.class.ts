import * as Express from 'express';
const graphqlHTTP = require('express-graphql');

const DEFAULT_PORT = process.env.DEFAULT_PORT || 3001;

export default class Server {

    private expressApp;

    constructor(private port = DEFAULT_PORT) {
        this.expressApp = new Express();
    }

    public addRootSchema(schema) {
        this.expressApp.use('/', graphqlHTTP({
            schema,
            graphiql: true
        }));
    }

    public run() {
        this.expressApp.listen(this.port);
        console.log(`App is running on localhost:${this.port}`);
    }
}