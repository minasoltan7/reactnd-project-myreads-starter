import React, { Component } from "react";
import Book from "./Book";

export default class BookShelf extends Component {
  render() {
    return (
      <div className="list-books">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <Book />
                </li>
                <li>
                  <Book />
                </li>
                <li>
                  <Book />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
