import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { designer } from "../const/questions";

export function Designer(props) {
  const [dirty, setDirty] = React.useState(false);
  const [questionId, setQuestionId] = React.useState(0);
  const [currentScore, setCurrentScore] = React.useState(0);

  switch (questionId) {
    case 0:
      return (
        <>
          <Col className="fs-5">{designer[0].text}</Col>
          <Col>
            <Form>
              {designer[0].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`designer-0/${i}`}
                  key={`designer-0/${i}`}
                  name={"designer-0"}
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
          <Col className="fs-5">{designer[1].text}</Col>
          <Col>
            <Form>
              {designer[1].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`designer-1/${i}`}
                  key={`designer-1/${i}`}
                  name={"designer-1"}
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
          <Col className="fs-5">{designer[2].text}</Col>
          <Col>
            <Form>
              {designer[2].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`designer-2/${i}`}
                  key={`designer-2/${i}`}
                  name={"designer-2"}
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

    case 3:
      return (
        <>
          <Col className="fs-5">{designer[3].text}</Col>
          <Col>
            <Form>
              {designer[3].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`designer-3/${i}`}
                  key={`designer-3/${i}`}
                  name={"designer-3"}
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
                console.log(props.totalScore);
                props.totalScore > 50
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
          <Col className="fs-5">{designer[4].text}</Col>
          <Col>
            <Form>
              {designer[4].answers.map((answer, i) => (
                <Form.Check
                  type={"radio"}
                  id={`designer-4/${i}`}
                  key={`designer-4/${i}`}
                  name={"designer-4"}
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
                Math.round(props.totalScore * currentScore);
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
