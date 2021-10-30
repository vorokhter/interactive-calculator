import React from "react";
import { Col, Button } from "react-bootstrap";

export function Tester(props) {
  return (
    <>
      <Col className="fs-3 fw-bold mb-4">
        Прости, но такой вакансии пока нет, может на кого-то другого хочешь
        попробоваться?
      </Col>

      <Col className="d-flex justify-content-end">
        <Button
          className="p-0"
          variant="link"
          onClick={() => {
            props.setBranchId(0);
            props.updateTotalScore(0);
          }}
        >
          Возможно
        </Button>
      </Col>
    </>
  );
}
