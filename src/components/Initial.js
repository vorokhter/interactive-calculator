import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { initial } from "../const/questions";

export function Initial(props) {
  const [dirty, setDirty] = React.useState(false);
  const [vacancyId, setVacancyId] = React.useState(-1);
  const [questionId, setQuestionId] = React.useState(0);
  const [currentScore, setCurrentScore] = React.useState(0);

  switch (questionId) {
    case 0:
      return (
        <>
          <Col className="fs-5">{initial[0].text}</Col>
          <Col>
            <Form>
              {initial[0].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`initial-0/${i}`}
                  name={"initial-0"}
                  label={answer.text}
                  onChange={() => {
                    setVacancyId(answer.value);
                    setDirty(true);
                  }}
                />
              ))}
            </Form>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="p-0"
              variant="link"
              disabled={!dirty}
              onClick={() => {
                setQuestionId(questionId + 1);
                setDirty(false);
              }}
            >
              Далее
            </Button>
          </Col>
        </>
      );

    case 1:
      return (
        <>
          <Col className="fs-5">{initial[1].text}</Col>
          <Col>
            <Form>
              {initial[1].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`initial-1/${i}`}
                  key={`initial-1/${i}`}
                  name={"initial-1"}
                  label={answer.text}
                  onChange={() => {
                    setCurrentScore(answer.value);
                    setDirty(true);
                  }}
                />
              ))}
            </Form>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="p-0"
              variant="link"
              disabled={!dirty}
              onClick={() => {
                props.setBranchId(vacancyId);
                props.updateTotalScore(props.totalScore + currentScore);
              }}
            >
              Далее
            </Button>
          </Col>
        </>
      );

    default:
      return null;
  }
}
