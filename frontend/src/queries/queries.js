import { gql } from '@apollo/client';
const getAuthorsQuery = gql`
    {
        allAuthors {
            name
            id
        }
    }
`;
const getBooksQuery = gql`
{
	allBooks{
		name
		genre
		
	}
	allAuthors{
		name
		age
	}
	

}
`
const addBookMutation = gql`
mutation{
	addBook(name : "" , genre : "" , authorId : ""){
		name
		genre
	}
}
`
export { getAuthorsQuery, getBooksQuery, addBookMutation }