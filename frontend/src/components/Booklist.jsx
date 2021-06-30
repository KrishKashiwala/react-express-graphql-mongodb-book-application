import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

// graphql queries
const Booklist = () => {
    // handling graphql queries data
    const { data, loading, error, refetch } = useQuery(getBooksQuery);
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            {data.allBooks.map((datas) => {
                return (
                    <ul>
                        <li key={datas.id}>{datas.name}</li>
                        <li key={datas.id}>{datas.genre}</li>
                    </ul>
                );
            })}

            <button onClick={() => refetch}>Click to refetch</button>
        </div>
    );
};
export default Booklist;
