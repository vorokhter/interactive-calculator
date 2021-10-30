import React from "react";
import { Col, Button } from "react-bootstrap";

export function Begin(props) {
  return (
    <>
      <Col>
        <img src="./images/begin.png" alt="teamwork" className="w-100" />
      </Col>
      <Col className="fs-3 fw-bold">
        Интерактивный калькулятор на JS, считающий вероятность приёма на работу.
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          className="p-0"
          variant="link"
          onClick={() => props.setBranchId(0)}
        >
          Начать
        </Button>
      </Col>
    </>
  );
}
