import React, { useContext } from "react";
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
  return (
    <main className="NewPost">
      <h2>New Book</h2>
      <form onSubmit={handleSubmit} className="newPostForm">
        <div className="form-group">
          <div className="row">
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              placeholder="title"
              id="postTitle"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="postTitle">Author:</label>
            <input
              type="text"
              placeholder="Author"
              id="postTitle"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <label htmlFor="postTitle">Published Date:</label>
            <input
              type="date"
              placeholder="title"
              id="postTitle"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="postTitle">Image:</label>
            <input
              type="url"
              placeholder="Image URL"
              id="postTitle"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="description">
          <label htmlFor="postBody">Comments:</label>
          <textarea
            placeholder="comments"
            id="postBody"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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
