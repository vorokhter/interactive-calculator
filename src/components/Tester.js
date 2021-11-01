import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export function Tester(props) {
  return (
    <Row className="flex-column gy-4">
      <Col className="fs-1 fw-bold">
        Прости, но такой вакансии пока нет, может на кого-то другого хочешь
        попробоваться?
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          className="p-0 text-decoration-none fs-5"
          variant="link"
          onClick={() => {
            props.updateTotalScore(0);
            props.setBranchId(0);
          }}
        >
          Возможно
        </Button>
      </Col>
    </Row>
  );
}
