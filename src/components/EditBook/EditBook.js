import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "./EditBook.css";

const EditBook = () => {
  let {
    handleEdit,
    editDescription,
    setEditDescription,
    editTitle,
    setEditTitle,
    books,
    editAuthor,
    setEditAuthor,
    editDate,
    setEditDate,
    editImage,
    setEditImage,
    handleCancel,
  } = useContext(DataContext);
  let { id } = useParams();
  let book = books.find((book) => book.id.toString() === id);
  useEffect(() => {
    if (book) {
      setEditTitle(book.title);
      setEditAuthor(book.author);
      setEditDate(book.date);
      setEditImage(book.image);
      setEditDescription(book.body);
    }
  }, [
    book,
    setEditDescription,
    setEditTitle,
    setEditAuthor,
    setEditDate,
    setEditImage,
  ]);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Book Details</h2>
          <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
            <div className="form-group">
              <div className="row">
                <label htmlFor="postTitle">Title:</label>
                <input
                  type="text"
                  placeholder="title"
                  id="postTitle"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </div>
              <div className="row">
                <label htmlFor="postTitle">Author:</label>
                <input
                  type="text"
                  placeholder="Author"
                  id="postTitle"
                  required
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="postTitle">Published Date:</label>
                <input
                  type="date"
                  id="postTitle"
                  required
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />
              </div>
              <div className="row">
                <label htmlFor="postTitle">Image:</label>
                <input
                  type="url"
                  placeholder="Image URL"
                  id="postTitle"
                  required
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                />
              </div>
            </div>
            <div className="description">
              <label htmlFor="postBody">Comments:</label>
              <textarea
                placeholder="comments"
                id="postBody"
                required
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="add" onClick={() => handleEdit(book.id)}>
                Update Book
              </button>
            </div>
          </form>
        </>
      )}
      {!editTitle && (
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
