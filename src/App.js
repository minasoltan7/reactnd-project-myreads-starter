import React from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./containers/BookShelf";
import SearchBar from "./containers/SearchBar";

class BooksApp extends React.Component {
  state = {
    allBooksInLibrary:[]
  };

componentDidMount(){
  BooksAPI.getAll().then((books)=>
  {
    console.log(books)
    this.setState({
      allBooksInLibrary:books
    })
  })
}

  render() {
    return (
      <div className="app">
        <Route path="/search">
          <SearchBar />
        </Route>
        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads Books</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf name="Currently Reading" />
                <BookShelf name="Want to Read" />
                <BookShelf name="Read" />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        </Route>
      </div>
    );
  }
}

export default BooksApp;
