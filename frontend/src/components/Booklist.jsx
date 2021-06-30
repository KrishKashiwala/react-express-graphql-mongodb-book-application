import React  from 'react'
import {
  useQuery,
} from '@apollo/client'
import {getBooksQuery} from '../queries/queries'

// graphql queries
const Booklist = () => {
	
	// handling graphql queries data
	const {data , loading , error , refetch} = useQuery(getBooksQuery)
	if(loading) return <p>loading....</p>
	if(error) return <p>Error :(</p>
	return(
		<div>
			{
				data.allBooks.map(datas => {
					return(
					<ul>
						<li key = {datas.name}>{datas.name}</li>
						<li key = {datas.genre}>{datas.genre}</li>
					</ul>
					)
				})
			} 
			{
				data.allAuthors.map(datas => {
					return (
					<ul>
						<li key = {datas.name}>{datas.name}</li>
						<li key = {datas.age}>{datas.age}</li>
					</ul>
					)
				})
			}
			<button onClick = {() => refetch}>Click to refetch</button>
		</div>
	)
}
export default Booklist