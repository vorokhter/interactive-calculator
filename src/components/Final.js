import React from "react";
import { Col } from "react-bootstrap";

export function Final(props) {
  const score = props.totalScore;

  if (score >= 0 && score <= 50)
    return (
      <Col className="fs-1 fw-bold">К сожалению, нам с тобой не по пути.</Col>
    );

  if (score >= 51 && score <= 80)
    return (
      <Col className="fs-1 fw-bold">
        Ну если больше никто не придёт, то возьмём тебя.
      </Col>
    );

  if (score >= 81 && score <= 100)
    return (
      <Col className="fs-1 fw-bold">Проверь почту, там уже лежит оффер.</Col>
    );

  return null;
}
