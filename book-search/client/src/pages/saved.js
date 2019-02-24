import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/savedBookItem";
import DeleteBtn from "../components/DeleteBtn/index"


class Saved extends Component {
    state = {
        books:[]
    };

    componentDidMount(){
        this.loadBooks();
        console.log(this.state.books);
    }

    loadBooks = () => {
        console.log("GET REQUEST")
        API.getSaved()
        .then(res => this.setState( {books:res.data} ))
        .catch(err => console.log(err));
    }

    deleteBook = id => {
        console.log("DELETE REQUEST")
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    render(){
        return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Saved Books</h1>
                </div>
                <Link to = "/">
                Search Books
                </Link>
            </div>

            <div className = "container">
            {!this.state.books.length ?(
                <h1>No Saved Books</h1>
            ) : (
                <BookList>
                    {this.state.books.map((book, index) =>{
                        return (
                            <BookListItem
                            key = {book._id}
                            title = {book.title}
                            authors = {book.authors}
                            href = {book.link}
                            description = {book.description}
                            id = {index}
                            DeleteFunction = {() => this.deleteBook(book._id)}
                            >
                            </BookListItem>

                        )
                    })}
                </BookList>
            )}
            </div>
        </div>
        );
    }
}

export default Saved;
