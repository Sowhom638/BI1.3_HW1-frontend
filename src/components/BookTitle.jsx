import React from "react";
import useFetch from "../../useFetch";

const BookTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://bi-1-3-hw-1-deployment.vercel.app/books/${title}`
  );
  console.log(data);

  return data ? (
    <div>
      <h2>{data.book.title}</h2>
      <p>Director: {data.book.author}</p>
      <p>Publish Year: {data.book.publishedYear}</p>
      <p>Genre: {data.book.genre.join(", ")}</p>
    </div>
  ) : (
    <div>{loading && <p>loading...</p>}</div>
  );
};

export default BookTitle;
