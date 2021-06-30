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
const addBookMutation = gql`
mutation addBooks($name : String , $genre : String , $authorId : String){
	addBook(name : $name,  genre : $genre , authorId : $authorId){
		name
		genre
		authorId
	}
}
`
export { getAuthorsQuery, getBooksQuery, addBookMutation }