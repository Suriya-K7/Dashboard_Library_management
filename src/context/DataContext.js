import { createContext, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let [search, setSearch] = useState("");
  let [searchResults, setSearchResults] = useState("");
  let [title, setTitle] = useState("");
  let [editTitle, setEditTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [editAuthor, setEditAuthor] = useState("");
  let [date, setDate] = useState("");
  let [editDate, setEditDate] = useState("");
  let [image, setImage] = useState("");
  let [editImage, setEditImage] = useState("");
  let [description, setDescription] = useState("");
  let [editDescription, setEditDescription] = useState("");
  let [savedBooks, setSavedBooks] = useState([]);
  let { width } = useWindowSize();

  // if using through local storage

  let [books, setBooks] = useState([
    {
      id: 1,
      title: "Software Architecture: The Hard Parts",
      author: "Neal Ford",
      image:
        "https://image.ebooks.com/cover/210380834.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "There are no easy decisions in software architecture. Instead, there are many hard parts--difficult problems or issues with no best practices--that force you to choose among various compromises. With this book, you'll learn how to think critically about the trade-offs involved with distributed architectures.",
    },
    {
      id: 2,
      title: "Learning Domain-Driven Design",
      author: "Vlad Khononov",
      image:
        "https://image.ebooks.com/cover/210393921.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "Building software is harder than ever. As a developer, you not only have to chase ever-changing technological trends but also need to understand the business domains behind the software. This practical book provides you with a set of core patterns, principles, and practices for analyzing business domains, understanding business strategy, and, most importantly, aligning software design with its business needs.",
    },
    {
      id: 3,
      title: "Fundamentals of Data Engineering",
      author: "Joe Reis, Matt Housley",
      image:
        "https://image.ebooks.com/cover/210595152.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "Data engineering has grown rapidly in the past decade, leaving many software engineers, data scientists, and analysts looking for a comprehensive view of this practice. With this practical book, you'll learn how to plan and build systems to serve the needs of your organization and customers by evaluating the best technologies available through the framework of the data engineering lifecycle.",
    },
    {
      id: 4,
      title: "Building Microservices (2nd ed.)",
      author: "Sam Newman",
      image:
        "https://image.ebooks.com/cover/210338899.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "As organizations shift from monolithic applications to smaller, self-contained microservices, distributed systems have become more fine-grained. But developing these new systems brings its own host of problems. This expanded second edition takes a holistic view of topics that you need to consider when building, managing, and scaling microservices architectures.",
    },
    {
      id: 5,
      title: "Fluent Python (2nd ed.)",
      author: "Luciano Ramalho",
      image:
        "https://image.ebooks.com/cover/210531368.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "Don't waste time bending Python to fit patterns you've learned in other languages. Python's simplicity lets you become productive quickly, but often this means you aren't using everything the language has to offer. With the updated edition of this hands-on guide, you'll learn how to write effective, modern Python 3 code by leveraging its best ideas.",
    },
    {
      id: 6,
      title: "Hands-On Machine Learning ",
      author: "Aurélien Géron",
      image:
        "https://image.ebooks.com/cover/210681725.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "Through a recent series of breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This bestselling book uses concrete examples, minimal theory, and production-ready Python frameworks (Scikit-Learn, Keras, and TensorFlow) to help you gain an intuitive understanding of the concepts and tools for building intelligent systems.",
    },
    {
      id: 7,
      title: "Learning JavaScript Design Patterns ",
      author: "Addy Osmani",
      image:
        "https://image.ebooks.com/cover/210832548.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "Do you want to write beautiful, structured, and maintainable JavaScript by applying modern design patterns to the language? Do you want clean, efficient, manageable code? Want to stay up-to-date with the latest best practices? If so, the updated second edition of Learning JavaScript Design Patterns is the ideal place to start.",
    },
    {
      id: 8,
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      image:
        "https://image.ebooks.com/cover/95729334.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers. What are the right choices for your application? How do you make sense of all these buzzwords?",
    },
    {
      id: 9,
      title: "The Staff Engineer's Path",
      author: "Tanya Reilly",
      image:
        "https://image.ebooks.com/cover/210670147.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "For years, companies have rewarded their most effective engineers with management positions. But treating management as the default path for an engineer with leadership ability doesn't serve the industry well--or the engineer. The staff engineer's path allows engineers to contribute at a high level as role models, driving big projects, determining technical strategy, and raising everyone's skills.",
    },
    {
      id: 10,
      title: "Generative Deep Learning",
      author: "David Foster",
      image:
        "https://image.ebooks.com/cover/210833591.jpg?width=332&height=500&quality=85",
      date: "2023-06-15",
      body: "Generative AI is the hottest topic in tech. This practical book teaches machine learning engineers and data scientists how to use TensorFlow and Keras to create impressive generative deep learning models from scratch, including variational autoencoders (VAEs), generative adversarial networks (GANs), Transformers, normalizing flows, energy-based models, and denoising diffusion models.",
    },
    {
      id: 11,
      title: "Software Architecture",
      author: "Neal Ford",
      date: "2023-06-15",
      image:
        "https://image.ebooks.com/cover/210380834.jpg?width=332&height=500&quality=85",
      body: "There are no easy decisions in software architecture. Instead, there are many hard parts--difficult problems or issues with no best practices--that force you to choose among various compromises. With this book, you'll learn how to think critically about the trade-offs involved with distributed architectures.",
    },
  ]);
  useEffect(() => {
    let localStorageBooks = JSON.parse(localStorage.getItem("books")) || books;
    let filteredBooks = localStorageBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredBooks.reverse());
  }, [books, search, setBooks]);
  useEffect(() => {
    let localStorageSavedBooks =
      JSON.parse(localStorage.getItem("savedBooks")) || [];
    setSavedBooks(localStorageSavedBooks);
  }, []);
  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    let id = books.length ? books[books.length - 1].id + 1 : 1;
    let newBook = {
      id,
      title: title,
      author,
      image,
      date,
      body: description,
    };
    let allBooks = [...books, newBook];
    console.log(allBooks);
    setBooks(allBooks);
    localStorage.setItem("books", JSON.stringify(allBooks));
    setDescription("");
    setTitle("");
    setImage("");
    setDate("");
    setAuthor("");
    navigate("/");
  };
  let handleCancel = () => {
    setDescription("");
    setTitle("");
    setImage("");
    setDate("");
    setAuthor("");
    setEditTitle("");
    setEditAuthor("");
    setEditDate("");
    setEditImage("");
    setEditDescription("");
    navigate("/");
  };
  /*---------------------------- */
  let handleDelete = async (id) => {
    if (window.confirm("Are you sure") === true) {
      let filteredBooks = books.filter((book) => book.id !== id);
      setBooks(filteredBooks);
      localStorage.setItem("books", JSON.stringify(filteredBooks));
      navigate("/");
    }
  };
  /*---------------------------- */

  let handleEdit = async (id) => {
    if (
      editTitle === "" ||
      editAuthor === "" ||
      editDate === "" ||
      editImage === "" ||
      editDescription === ""
    ) {
      alert("kindly fill all the details");
    } else {
      let editedBook = {
        id,
        title: editTitle,
        author: editAuthor,
        date: editDate,
        image: editImage,
        body: editDescription,
      };
      let updatedBook = books.map((book) =>
        book.id === id ? { ...editedBook } : book
      );
      setBooks(updatedBook);
      localStorage.setItem("books", JSON.stringify(updatedBook));
      setDescription("");
      setTitle("");
      setImage("");
      setDate("");
      setAuthor("");
      navigate("/");
    }
  };
  /*---------------------------- */
  let handleSave = (id) => {
    let book;
    if (savedBooks.length === 0) {
      book = books.filter((book) => id === book.id);
      setSavedBooks(book);
    } else {
      let check = savedBooks.filter((book) => id === book.id);
      book = books.filter((book) => id === book.id);
      let allBooks = [...savedBooks, book[0]];
      localStorage.setItem("savedBooks", JSON.stringify(allBooks));
      if (!check.length) {
        setSavedBooks(allBooks);
      }
    }
  };
  let handleRemove = (id) => {
    if (window.confirm("Are you sure") === true) {
      let filteredBooks = savedBooks.filter((book) => id !== book.id);
      localStorage.setItem("savedBooks", JSON.stringify(filteredBooks));
      setSavedBooks(filteredBooks);
      navigate("/savedbooks");
    }
  };
  /*---------------------------- */

  return (
    <DataContext.Provider
      value={{
        width,
        search,
        setSearch,
        searchResults,
        handleSubmit,
        description,
        setDescription,
        title,
        setTitle,
        books,
        handleDelete,
        handleEdit,
        editDescription,
        setEditTitle,
        editTitle,
        setEditDescription,
        date,
        setDate,
        author,
        setAuthor,
        image,
        setImage,
        handleCancel,
        editAuthor,
        setEditAuthor,
        editDate,
        setEditDate,
        editImage,
        setEditImage,
        handleSave,
        savedBooks,
        setSavedBooks,
        handleRemove,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
