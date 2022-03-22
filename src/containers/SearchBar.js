import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

export default class SearchBar extends Component {
  componentDidMount() {
    this.props.loadBooks();
    console.log(this.props.books);
  }

  state={
    bookToShow:"",
    query:""
  }

  handleQuery=(query)=>{
    console.log(query)
    this.setState(()=>({

      query:query
    }))
    console.log(this.state)

}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/* {this.props.books.filter((book) => ({
              // PUT 
            }))} */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onInput={(event)=>this.handleQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}
