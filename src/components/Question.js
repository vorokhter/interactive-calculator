import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export function Question({
  branch,
  questionId,
  setAnswerValue,
  questionChange,
  questionClick,
}) {
  const [dirty, setDirty] = React.useState(false);

  return (
    <Row className="flex-column gy-4">
      <Col className="fs-5">{branch[questionId].text}</Col>
      <Col>
        <Row className="flex-column gy-3">
          {branch[questionId].answers.map((answer, i) => (
            <Col>
              <Form.Check
                type={"radio"}
                key={`${branch}/${questionId}/${i}`}
                key={`${branch}/${questionId}/${i}`}
                name={`${branch}/${questionId}`}
                label={answer.text}
                onChange={() => {
                  setAnswerValue(answer.value);
                  if (questionChange) questionChange();
                  setDirty(true);
                }}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          className="p-0 text-decoration-none"
          variant="link"
          disabled={!dirty}
          onClick={() => {
            if (questionClick) questionClick();
            setDirty(false);
          }}
        >
          Далее
        </Button>
      </Col>
    </Row>
  );
}
