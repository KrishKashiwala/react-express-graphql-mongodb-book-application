const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express();


// connect mongodb database

const db_string = 'mongodb+srv://krishkashiwala:krish5501@krishcluster.nclxl.mongodb.net/graphqlDatabase?retryWrites=true&w=majority'
mongoose.connect(db_string, {
	useNewUrlParser: true,
	useFindAndModify: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('connected to database');
});


// bind express with graphql
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('now listening for requests on port 4000');
});