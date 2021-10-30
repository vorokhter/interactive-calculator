import React from "react";
import { designer } from "../const/questions";
import { Question } from "./";

export function Designer(props) {
  const [questionId, setQuestionId] = React.useState(0);
  const [answerValue, setAnswerValue] = React.useState(0);

  const defaultScoreUpdate = () => {
    answerValue
      ? props.updateTotalScore(props.totalScore + answerValue)
      : setQuestionId(questionId + 1);
  };

  React.useEffect(() => {
    if ((questionId === 3 && props.totalScore <= 40) || questionId === 4)
      return props.setBranchId(4);
    return setQuestionId(questionId + 1);
  }, [props.totalScore]);

  switch (questionId) {
    case 0:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={defaultScoreUpdate}
        />
      );

    case 1:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={defaultScoreUpdate}
        />
      );

    case 2:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={defaultScoreUpdate}
        />
      );

    case 3:
      return (
        <Question
          branch={designer}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={defaultScoreUpdate}
        />
      );

    case 4:
      return (
        <Question
          branch={designer}
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
