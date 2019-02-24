import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getGoogleBooks: function(query) {
    const myQuery = query.replace(" ", "+");
    //let test = "GET https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyBnkHRnWeGp5-PASVAVfD9k1KrPBu1WB10"
    //const key = "AIzaSyBnkHRnWeGp5-PASVAVfD9k1KrPBu1WB10";
    let url = "https://www.googleapis.com/books/v1/volumes?q="+myQuery;  //+"&key="+key;
    console.log(url);
    return axios.get(url);
  },
  
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  getSaved: function(){
    return axios.get("/api/books");
  },
  deleteBook: function(id){
    return axios.delete("/api/books/"+id);
  }
};