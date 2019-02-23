import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API.js";
import { BookList, BookListItem } from "../components/bookItem";

class Search extends Component {
    state = {
        books:{},
        bookSearch:""
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleBooks(this.state.bookSearch)
            //.then(res => console.log(res.data.items))
            .then(res => this.setState({ books: res.data.items }))
            .catch(err =>console.log(err));
        
        console.log(this.state.books);
        console.log(this.state.books.length);

    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleSave = event => {
        event.preventDefault();
        var dat = this.state.books[event.target.id];
        console.log(dat);
    
        console.log("title:"+dat.volumeInfo.title);
        console.log("authors:"+dat.volumeInfo.authors[0]);
        console.log("image:"+dat.volumeInfo.imageLinks.smallThumbnail);
        console.log("Link:"+dat.selfLink);
        API.saveBook(
            {title: dat.volumeInfo.title,
            authors: dat.volumeInfo.authors,
            description: dat.volumeInfo.description,
            image: dat.volumeInfo.imageLinks.smallThumbnail,
            link: dat.selfLink
            }
        )
    };
    

    render(){
        return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Book Search</h1>
                    <p className="lead">Search the Google Books API by book title.</p>
                </div>
                <Link to = "/saved">
                Saved Books
                </Link>
            </div>

            <div className = "container">
                <form>
                    <div className = "form-group">
                        <label for="books">Search Book:</label>
                        <input 
                            name="bookSearch"
                            className="form-control" 
                            value = {this.state.bookSearch}
                            onChange = {this.handleInputChange}>
                        </input>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick = {this.handleFormSubmit}>
                            Submit</button>
                    </div>
                </form>
            </div>
            <Col size ="xs-12">
            {!this.state.books.length ?(
                <h1>No Books to Display</h1>
            ) : (
                <BookList>
                    {this.state.books.map((book, index) => {
                        return (
                            <BookListItem 
                            key = {book.id}
                            title = {book.volumeInfo.title}
                            authors = {book.volumeInfo.title}
                            href = {book.selfLink}
                            description = {book.description}
                            id = {index}
                            handleSave = {this.handleSave}
                            />
                        )
                    })}
                </BookList>
            )}
            </Col>
        </div>
        );
    }
}

export default Search;


//apikey = AIzaSyBnkHRnWeGp5-PASVAVfD9k1KrPBu1WB10

//GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey