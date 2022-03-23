import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import ShelfUpdate from "./ShelfUpdate"

export default class SearchBar extends Component {
  state = {
    bookToShow: [],
    query: "",
  };

  handleQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
    if (this.state.query) {
      BooksAPI.search(this.state.query).then((book) =>
        this.setState({
          bookToShow: book,
        })
      );
    }
  };

  render() {

    return (
      <div className="search-books">
          <div className="search-books-bar">
              <Link to="/"><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                  <input
                      type="text"
                      placeholder="Search by title or author"
                      value={this.state.query}
                      onChange={event => this.handleQuery(event.target.value)} />

              </div>
          </div>
          {this.state.query ?
              <div className="search-books-results">
                  <ol className="books-grid">
                      {this.state.bookToShow.length > 0 &&
                          this.state.bookToShow.map(book =>
                              book.hasOwnProperty("imageLinks") ?
                                  <li key={book.id}>
                                      <div className="book">
                                          <div className="book-top">
                                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                              <ShelfUpdate
                                                  shelfBooks={this.props.shelfBooks}
                                                  book={book}
                                                  updateShelf={this.props.updateShelf}
                                                  books={this.state.bookToShow} />
                                          </div>
                                          <div className="book-title">{book.title}</div>
                                          <div className="book-authors">{book.authors}</div>
                                      </div>
                                  </li>
                                  :
                                  console.log("error")
                          )
                      }
                  </ol>
              </div> :
              null}
      </div>
  )
  }
}
