import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/savedBookItem";


class Saved extends Component {
    state = {
        books:{}
    };

    componentDidMount(){
        this.loadBooks();
        console.log(this.state.books);
    }

    loadBooks = () => {
        API.getSaved()
        .then(res => this.setState( {books:res.data} ))
        .catch(err => console.log(err));
    }

    deleteBook = id => {
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
                            title = {book.title}
                            authors = {book.authors}
                            href = {book.link}
                            description = {book.description}
                            id = {index}
                            />
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
