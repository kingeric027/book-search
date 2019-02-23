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
            <Col size="xs-8 sm-9">
              <h3>{props.title}</h3>
              <p>Authors: {props.authors}</p>
              <p>{props.description}</p>
              <button type="button" className="btn btn-outline-success" id={props.id} onClick = {props.handleSave}>Save Book</button>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
  