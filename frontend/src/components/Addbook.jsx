import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { Formik, Form, Field } from 'formik';
const Addbook = () => {
    const { data, error, loading } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);
    console.log('addbook is here', addBook);

    if (loading) return <p>...loading</p>;
    if (error) return <p>error :(</p>;
    console.log(data);

    return (
        <Formik
            initialValues={{
                name: '',
                genre: '',
                authorId: ''
            }}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                addBook({
                    variables: {
                        name: data.name,
                        genre: data.genre,
                        authorId: data.authorId
                    },
                    refetchQueries: { query: getAuthorsQuery }
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
                        name="authorId"
                        onChange={handleChange}
                        value={values.authorId}
                    >
                        {data.allAuthors.map((author) => (
                            <option
                                key={author.id}
                                value={author.id}
                                onChange={handleChange}
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
