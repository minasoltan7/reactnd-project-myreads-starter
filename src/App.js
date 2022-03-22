import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './containers/BookShelf'
import { Route, Link } from 'react-router-dom'
import SearchBar from './containers/SearchBar'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    this.newShelf()
  }

  newShelf = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          allBooks: books
        })
        console.log(this.state)
      })
  }

  updateShelf = async (book, shelf) => {
    console.log(book, shelf)
    const result = await BooksAPI.update(book, shelf)
    console.log(result)
    this.newShelf()

  }
  render() {
    return (
      <div className="app">
        <Route exact path="/search">
          <SearchBar
            updateShelf={this.updateShelf}
            BookShelfs= {this.state.allBooks} />
        </Route>
        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  books={this.state.allBooks}
                  title="Currently Reading"
                  filter="currentlyReading"
                  updateShelf={this.updateShelf} />
                <BookShelf
                  books={this.state.allBooks}
                  title="Want to Read"
                  filter="wantToRead"
                  updateShelf={this.updateShelf} />
                <BookShelf
                  books={this.state.allBooks}
                  title="Read"
                  filter="read"
                  updateShelf={this.updateShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
        </Route>

      </div>
    )
  }
}

export default BooksApp
