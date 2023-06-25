import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "../../context/DataContext";

const Feed = () => {
  let { searchResults } = useContext(DataContext);
  return (
    <>
      {searchResults.map((book) => (
        <Post key={book.id} book={book} />
      ))}
    </>
  );
};

export default Feed;
