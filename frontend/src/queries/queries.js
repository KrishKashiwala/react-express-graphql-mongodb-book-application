import { gql } from '@apollo/client';
const getAuthorsQuery = gql`
query{
        allAuthors {
            name
	    age
	    id
        }
}
`;
const getBooksQuery = gql`
query{
	allBooks{
		name
		genre
		id
		
	}
	
}
`
const getOneAuthorQuery = gql`
query AuthorName($name : String){ 
	authorName(name : $name){
		name
		id
		age
	}
}
`
const addBookMutation = gql`
mutation addBooks($name : String , $genre : String , $authorId : String){
	addBook(name : $name,  genre : $genre , authorId : $authorId){
		name
		genre
		authorId
	}
}
`
export { getAuthorsQuery, getOneAuthorQuery, getBooksQuery, addBookMutation }