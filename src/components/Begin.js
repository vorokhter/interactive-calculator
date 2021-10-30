import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export function Begin(props) {
  return (
    <Row className="flex-column">
      <Col className="fs-1 fw-bold">
        Интерактивный калькулятор на JS, считающий вероятность приёма на работу.
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          className="p-0 text-decoration-none"
          variant="link"
          onClick={() => props.setBranchId(0)}
        >
          Начать
        </Button>
      </Col>
    </Row>
  );
}
