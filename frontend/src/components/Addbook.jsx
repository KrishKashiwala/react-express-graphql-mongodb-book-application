import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { Formik, Form, Field } from 'formik';
const Addbook = () => {
    const { data, error, loading } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);
    console.log(addBook);
    if (loading) return <p>...loading</p>;
    if (error) return <p>error :(</p>;
    console.log(data.allAuthors);

    return (
        <Formik
            initialValues={{
                name: '',
                genre: '',
                authorName: ''
            }}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                addBook({
                    variables: {
                        name: data.name,
                        genre: data.genre,
                        authorId: data.authorId
                    }
                });
                console.log(data);
                setSubmitting(false);
            }}
        >
            {({ values, handleChange, isSubmitting }) => (
                <Form>
                    <Field type="input" name="name" />
                    <Field type="input" name="genre" />
                    <select
                        name="authorName"
                        onChange={handleChange}
                        value={values.authorName}
                    >
                        {data.allAuthors.map((author) => (
                            <option
                                key={author.id}
                                onChange={handleChange}
                                value={author.name}
                            >
                                {author.name}
                            </option>
                        ))}
                    </select>
                    <button disabled={isSubmitting}>Submit</button>
                    <button>+</button>
                </Form>
            )}
        </Formik>
    );
};
export default Addbook;
