import React from "react";
import { developer } from "../const/questions";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Question } from "./";

export function Developer(props) {
  const regexp = /^[0-9\b]+$/;
  const [questionId, setQuestionId] = React.useState(0);
  const [answerValue, setAnswerValue] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const [skip, setSkip] = React.useState(0);

  function secondQuestionChange(value) {
    if (
      (!value || regexp.test(value)) &&
      Number(value) <= 10 &&
      (value.length < 2 || value === "10")
    ) {
      setInputValue(value);
      setAnswerValue(value === "0" ? 20 : -50);
    }
  }

  const defaultScoreUpdate = () => {
    if (answerValue)
      return props.updateTotalScore(props.totalScore + answerValue);
    return setSkip(skip + 1);
  };

  React.useEffect(() => {
    if ((questionId === 3 && props.totalScore <= 40) || questionId === 4)
      return props.setBranchId(4);
    return setQuestionId(questionId + 1);
  }, [props.totalScore, skip]);

  switch (questionId) {
    case 0:
      return (
        <Question
          branch={developer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={defaultScoreUpdate}
        />
      );

    case 1:
      return (
        <Question
          branch={developer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={defaultScoreUpdate}
        />
      );

    case 2:
      return (
        <Row className="flex-column gy-4">
          <Col className="fs-5">{developer[questionId].text}</Col>
          <Col>
            <Form.Label>
              Введите число от 0 до 10, где 0 — это совершенно не люблю, а 10 —
              обожаю.
            </Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              className="bg-black text-white border-secondary"
              placeholder="Введите число"
              value={inputValue}
              onInput={(event) => {
                secondQuestionChange(event.target.value);
              }}
            />
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="p-0 text-decoration-none"
              variant="link"
              disabled={!inputValue}
              onClick={defaultScoreUpdate}
            >
              Далее
            </Button>
          </Col>
        </Row>
      );

    case 3:
      return (
        <Question
          branch={developer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={defaultScoreUpdate}
        />
      );

    case 4:
      return (
        <Question
          branch={developer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={() => {
            props.updateTotalScore(Math.round(props.totalScore * answerValue));
          }}
        />
      );

    default:
      return null;
  }
}
