import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

export default class SearchBar extends Component {
  componentDidMount() {
    this.props.loadBooks();
    console.log(this.props.books);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/* {this.props.books.map((book) => ({
              // PUT LOGIC HEREEEEE
            }))} */}
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}
