import React from 'react'
import useFetch from "../../useFetch";

const BookByAuthor = ({author}) => {
    const { data, loading, error } = useFetch(
        `https://bi-1-3-hw-1-backend.vercel.app/books/authors/${author}`
      );
      console.log(data)
  return (
    <div>
      <h2>Book by {author}</h2>
      <ul>
        {data && data.book.map(book=>(
        <li key={book._id}>{book.title}</li>
      ))}
      </ul>
    </div>
  )
}

export default BookByAuthor
