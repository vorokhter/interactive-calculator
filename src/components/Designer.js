import React from "react";
import { Col } from "react-bootstrap";
import { designer } from "../const/questions";
import { Question } from "./";

export function Designer(props) {
  const [questionId, setQuestionId] = React.useState(0);
  const [answerValue, setAnswerValue] = React.useState(0);

  switch (questionId) {
    case 0:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={() => {
            props.updateTotalScore(props.totalScore + answerValue);
            setQuestionId(questionId + 1);
          }}
        />
      );

    case 1:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={() => {
            props.updateTotalScore(props.totalScore + answerValue);
            setQuestionId(questionId + 1);
          }}
        />
      );

    case 2:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={() => {
            props.updateTotalScore(props.totalScore + answerValue);
            setQuestionId(questionId + 1);
          }}
        />
      );

    case 3:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={() => {
            props.updateTotalScore(props.totalScore + answerValue);
            props.totalScore > 50
              ? setQuestionId(questionId + 1)
              : props.setBranchId(4);
          }}
        />
      );

    case 4:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={() => {
            props.updateTotalScore(Math.round(props.totalScore * currentScore));
            props.setBranchId(4);
          }}
        />
      );

    default:
      return null;
  }
}
