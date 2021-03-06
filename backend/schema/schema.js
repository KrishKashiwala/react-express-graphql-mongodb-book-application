const graphql = require('graphql')
const Books = require('../models/books')
const Authors = require('../models/author')
const _ = require('lodash')
const { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLNonNull } = graphql

// dummy data for books

// const BookType = new GraphQLObjectType({
// 	name: "Book",
// 	fields: () => ({
// 		name: { type: GraphQLString },
// 		genre: { type: GraphQLString },
// 		author: {
// 			type: AuthorType,
// 			resolve(parent, args) {
// 				return Authors.findById(parent.authorId)
// 			}
// 		}
// 	})
// })

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args) {
				return Authors.findById(parent.authorId);
			}
		}
	})
});

// const AuthorType = new GraphQLObjectType({
// 	name: "Author",
// 	fields: () => ({

// 		name: {
// 			type: GraphQLString
// 		},
// 		age: {
// 			type: GraphQLID
// 		},
// 		books: {
// 			type: BookType,
// 			resolve(parent, args) {
// 				return Books.find({ authorId: parent.id })
// 			}
// 		}
// 	})
// })
const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return Books.find({ authorId: parent.id });
			}
		}
	})
});


// rootQuery
const RootQuery = new GraphQLObjectType({

	name: "RootQueryType",
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Books.findById(args.id)
			}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Authors.findById(args.id)
			}
		},
		authorName: {
			type: AuthorType,
			args: { name: { type: GraphQLString } },
			resolve(parent, args) {
				return Authors.findOne({ name: args.name })

			}
		},
		allBooks: {
			type: GraphQLList(BookType),
			resolve(parent, args) {
				return Books.find({})
			}
		},
		allAuthors: {
			type: GraphQLList(AuthorType),
			resolve(parent, args) {
				return Authors.find({})
			}
		}
	}
})

// Mutation

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		addAuthor: {
			type: AuthorType,
			args: {
				name: { type: GraphQLString },
				age: { type: GraphQLInt },
			},
			resolve(parent, args) {
				const newAuthor = new Authors({
					name: args.name,
					age: args.age
				})
				return newAuthor.save()
			}
		},
		addBook: {
			type: BookType,
			args: {
				name: { type: (GraphQLString) },
				genre: { type: (GraphQLString) },
				authorId: { type: (GraphQLString) },
			},
			resolve(parent, args) {
				const newBook = new Books({
					name: (args.name),
					genre: (args.genre),
					authorId: (args.authorId)
				})
				return newBook.save()
			}
		}
	})
})
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})