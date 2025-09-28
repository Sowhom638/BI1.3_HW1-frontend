import React, { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: [],
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });
  const genreOptions = [
    'Fiction',
    'Business',
    'Non-Fiction',
    'Mystery',
    'Thriller',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Historical',
    'Autobiography',
    'Biography',
    'Self-help',
    'Other'
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "publishedYear" || name === "rating") {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else if (name === "genre") {
      const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
      setFormData((prev) => ({ ...prev, genres: selected }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://bi-1-3-hw-1-backend.vercel.app/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw "Failed to add book";
      }

      const data = await response.json();
      console.log("Added book data:", data);


      console.log("Book added successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Published Year:</label>
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="genres" className="form-label">
            Genres * <small className="text-muted">(Hold Ctrl/Cmd to select multiple)</small>
          </label><br/>
          <select
            className="form-select"
            id="genres"
            name="genre"
            multiple
            value={formData.genres}
            onChange={handleChange}
            required
            size="5"
          >
            {genreOptions.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Rating (0-5):</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Cover Image URL:</label>
          <input
            type="url"
            name="coverImageUrl"
            value={formData.coverImageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookForm;