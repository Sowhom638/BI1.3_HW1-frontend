import React from "react";
import useFetch from "../../useFetch";

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://bi-1-3-hw-1-backend.vercel.app/books/authors/${author}`
  );
  console.log(data);
  return data ? (
    <div>
      <h2>Book by {author}</h2>
      <ul>
        {data && data.book.map((book) => <li key={book._id}>{book.title}</li>)}
      </ul>
    </div>
  ) : (
    <div>
      <div>{loading && <p>loading...</p>}</div>
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
};

export default BookByAuthor;
