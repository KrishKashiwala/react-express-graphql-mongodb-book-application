const express = require('express');
const cors = require('cors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express();
app.use(cors())

// connect mongodb database
mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useFindAndModify: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('connected to database');
}).catch(e => {
	console.log(e)
})


// bind express with graphql
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('now listening for requests on port 4000');
});