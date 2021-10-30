import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Container fluid style={{ height: "100vh" }}>
      <Row className="justify-content-center h-100">
        <Col md="6" className="d-flex align-items-center">
          <App />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
