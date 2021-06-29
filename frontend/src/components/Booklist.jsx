import React , {useState} from 'react'
import {
  useQuery,
  gql
} from '@apollo/client'

// graphql queries
const getBooksQuery = gql`
query{
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
const getAuthorsQuery = gql`
query{
	allAuthors{
			name
			age
	}
	
}
`


const Booklist = () => {
	
	// handling graphql queries data
	const {data} = useQuery(getBooksQuery)
	return(
		<div>
			{
				data.allBooks.map(datas => (
					<ul>
						<li key = {datas.name}>{datas.name}</li>
						<li key = {datas.name}>{datas.genre}</li>
					</ul>
				))
			} 
			{
				data.allAuthors.map(datas => (
					<ul>
						<li key = {datas.name}>{datas.name}</li>
						<li key = {datas.name}>{datas.age}</li>
					</ul>
				))
			}
		</div>
	)
}
export default Booklist