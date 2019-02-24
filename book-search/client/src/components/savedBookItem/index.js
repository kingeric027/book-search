import React from "react";
import { Container, Row, Col } from "../Grid";


// BookList renders a bootstrap list item
export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  
  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export function BookListItem(
    props
  ) {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
              <h3>{props.title}</h3>
              <p>Authors: {props.authors}</p>
              <p>{props.description}</p>
              <button onClick = {props.DeleteFunction}>Delete Book</button>
          </Row>
        </Container>
      </li>
    );
  }
  