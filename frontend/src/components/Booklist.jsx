import React , {useState} from 'react'
import {
  useQuery,
  gql
} from '@apollo/client'

// graphql queries
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


const Booklist = () => {
	
	// handling graphql queries data
	const {data , loading , error} = useQuery(getBooksQuery)
	if(loading) return <p>loading....</p>
	if(error) return <p>Error :(</p>
	return(
		<div>
			{
				data.allBooks.map(datas => (
					<ul>
						<li key = {datas.name}>{datas.name}</li>
						<li key = {datas.genre}>{datas.genre}</li>
					</ul>
				))
			} 
			{
				data.allAuthors.map(datas => (
					<ul>
						<li key = {datas.name}>{datas.name}</li>
						<li key = {datas.age}>{datas.age}</li>
					</ul>
				))
			}
		</div>
	)
}
export default Booklist