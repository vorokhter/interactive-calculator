import React from "react";
import { Row, Col } from "react-bootstrap";

export function Final(props) {
  const score = props.totalScore;

  const getText = () => {
    if (score >= 0 && score <= 50)
      return "К сожалению, нам с тобой не по пути.";
    if (score >= 51 && score <= 80)
      return "Ну если больше никто не придёт, то возьмём тебя.";
    if (score >= 81 && score <= 100)
      return "Проверь почту, там уже лежит оффер.";
  };

  return (
    <Row className="flex-column gy-4">
      <Col className="fs-1 fw-bold">{getText()}</Col>
      <Col className="fs-2 fw-bold text-muted">
        {"Вы набрали " + score + "%"}
      </Col>
    </Row>
  );
}
