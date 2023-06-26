import React, { useContext, useEffect } from "react";
import DataContext from "../../context/DataContext";
import "./NewBook.css";

const NewBook = () => {
  let {
    handleSubmit,
    setDescription,
    description,
    title,
    setTitle,
    author,
    setAuthor,
    date,
    setDate,
    image,
    setImage,
    handleCancel,
  } = useContext(DataContext);
  useEffect(() => {
    setTitle("");
    setAuthor("");
    setDate("");
    setImage("");
    setDescription("");
  }, [setAuthor, setDate, setDescription, setImage, setTitle]);
  return (
    <main className="NewBook">
      <h2>New Book</h2>
      <form onSubmit={handleSubmit} className="newBookForm">
        <div className="form-group">
          <div className="row">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>required</p>
          </div>
          <div className="row">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              placeholder="Author"
              id="author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <p>required</p>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <label htmlFor="date">Published Date:</label>
            <input
              type="date"
              id="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <p>required</p>
          </div>
          <div className="row">
            <label htmlFor="image">Image:</label>
            <input
              type="url"
              placeholder="Image URL"
              id="Image"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <p>required</p>
          </div>
        </div>
        <div className="description">
          <label htmlFor="description">Description :</label>
          <textarea
            placeholder="Description"
            id="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>required</p>
        </div>
        <div className="btn-group">
          <button type="submit" className="cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="add">
            Add Books
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewBook;
