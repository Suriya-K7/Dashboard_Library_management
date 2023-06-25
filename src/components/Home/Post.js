import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Post = ({ book }) => {
  let { handleSave } = useContext(DataContext);
  return (
    <article className="post">
      <Link to={`book/${book.id}`} className="card">
        <img src={book.image} alt="..." className="image" />
        <h2>{book.title}</h2>
        <p className="author">By - {book.author}</p>
        <p className="date">Published on :{book.date}</p>
      </Link>
      <button className="btnSave" onClick={() => handleSave(book.id)}>
        Save
      </button>
    </article>
  );
};

export default Post;
