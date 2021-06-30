import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
const Addbook = () => {
    const { data, error, loading } = useQuery(getAuthorsQuery);
    const [addBooks] = useMutation(addBookMutation);

    // states
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorName, setAuthorName] = useState('');

    if (loading) return <p>...loading</p>;
    if (error) return <p>error :(</p>;
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthorName(e.target.value)}>
                    <option disabled>Select author</option>
                    {data.allAuthors.map((author) => (
                        <option value={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button>+</button>
        </form>
    );
};
export default Addbook;
