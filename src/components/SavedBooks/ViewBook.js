import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "../EditBook/EditBook.css";

const ViewBook = () => {
  let { books, handleRemove } = useContext(DataContext);
  let { id } = useParams();
  let book = books.find((book) => book.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {book && (
          <>
            <div className="left">
              <img src={book.image} alt="..." />
            </div>
            <div className="right">
              <h2>{book.title}</h2>
              <p className="author">By {book.author}</p>
              <p className="postDate">Published on :-{book.date}</p>
              <p className="postBody">Description :- {book.body} </p>
              <div className="btn-group">
                <Link to={`/savedbooks`}>
                  <button className="editButton">Back</button>
                </Link>
                <button
                  className="deleteButton"
                  onClick={() => handleRemove(book.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </>
        )}
        {!book && (
          <>
            <h2>Book not found</h2>
            <Link to="/">
              <p>Kindly Visit Our Homepage and Explore</p>
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default ViewBook;
