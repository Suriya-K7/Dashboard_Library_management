import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "./EditBook.css";

const EditBook = () => {
  let {
    handleEdit,
    description,
    setDescription,
    title,
    setTitle,
    books,
    author,
    setAuthor,
    date,
    setDate,
    image,
    setImage,
    handleCancel,
  } = useContext(DataContext);
  let { id } = useParams();
  let book = books.find((book) => book.id.toString() === id);
  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setDate(book.date);
      setImage(book.image);
      setDescription(book.body);
    }
  }, [book, setTitle, setAuthor, setDate, setImage, setDescription]);
  return (
    <main className="NewBook">
      {title && (
        <>
          <h2>Edit Book Details</h2>
          <form onSubmit={(e) => e.preventDefault()} className="newBookForm">
            <div className="form-group">
              <div className="row">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
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
              </div>
              <div className="row">
                <label htmlFor="image">Image:</label>
                <input
                  type="url"
                  placeholder="Image URL"
                  id="image"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className="description">
              <label htmlFor="description">Description:</label>
              <textarea
                placeholder="Description"
                id="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="btn-group">
              <button className="cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="add"
                type="submit"
                onClick={() => handleEdit(book.id)}
              >
                Update Book
              </button>
            </div>
          </form>
        </>
      )}
      {!title && (
        <>
          <h2>Book not found</h2>
          <Link to="/">
            <p>Kindly Visit Our Homepage and Explore</p>
          </Link>
        </>
      )}
    </main>
  );
};

export default EditBook;
