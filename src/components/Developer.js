import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { developer } from "../const/questions";

export function Developer(props) {
  const regexp = /^[0-9\b]+$/;
  const [dirty, setDirty] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [questionId, setQuestionId] = React.useState(0);
  const [currentScore, setCurrentScore] = React.useState(0);

  function onInput(value) {
    if (
      (!value || regexp.test(value)) &&
      Number(value) <= 10 &&
      (value.length < 2 || value === "10")
    ) {
      setInputValue(value);
      setCurrentScore(value === "0" ? 20 : -50);
    }
  }

  switch (questionId) {
    case 0:
      return (
        <>
          <Col className="fs-5">{developer[0].text}</Col>
          <Col>
            <Form>
              {developer[0].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`developer-0/${i}`}
                  key={`developer-0/${i}`}
                  name={"developer-0"}
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
                props.updateTotalScore(props.totalScore + currentScore);
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
          <Col className="fs-5">{developer[1].text}</Col>
          <Col>
            <Form>
              {developer[1].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`developer-1/${i}`}
                  key={`developer-1/${i}`}
                  name={"developer-1"}
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
                props.updateTotalScore(props.totalScore + currentScore);
                setQuestionId(questionId + 1);
                setDirty(false);
              }}
            >
              Далее
            </Button>
          </Col>
        </>
      );

    case 2:
      return (
        <>
          <Col className="fs-5">{developer[2].text}</Col>
          <Col>
            <Form>
              <Form.Label>
                Введите число от 0 до 10, где 0 — это совершенно не люблю, а 10
                — обожаю.
              </Form.Label>
              <Form.Control
                className="mt-4"
                type="text"
                placeholder="Введите число"
                value={inputValue}
                onInput={(event) => {
                  onInput(event.target.value);
                }}
              />
            </Form>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              className="p-0"
              variant="link"
              disabled={!inputValue}
              onClick={() => {
                props.updateTotalScore(props.totalScore + currentScore);
                setQuestionId(questionId + 1);
                setDirty(false);
              }}
            >
              Далее
            </Button>
          </Col>
        </>
      );

    case 3:
      return (
        <>
          <Col className="fs-5">{developer[3].text}</Col>
          <Col>
            <Form>
              {developer[3].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`developer-3/${i}`}
                  key={`developer-3/${i}`}
                  name={"developer-3"}
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
                props.updateTotalScore(props.totalScore + currentScore);
                props.totalScore > 40
                  ? setQuestionId(questionId + 1)
                  : props.setBranchId(4);
                setDirty(false);
              }}
            >
              Далее
            </Button>
          </Col>
        </>
      );

    case 4:
      return (
        <>
          <Col className="fs-5">{developer[4].text}</Col>
          <Col>
            <Form>
              {developer[4].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`developer-4/${i}`}
                  key={`developer-4/${i}`}
                  name={"developer-4"}
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
                props.updateTotalScore(
                  Math.round(props.totalScore * currentScore)
                );
                props.setBranchId(4);
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
