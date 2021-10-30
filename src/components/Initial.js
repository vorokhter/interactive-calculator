import React from "react";
import { initial } from "../const/questions";
import { Question } from "./";

export function Initial(props) {
  const [vacancyId, setVacancyId] = React.useState(-1);
  const [questionId, setQuestionId] = React.useState(0);
  const [answerValue, setAnswerValue] = React.useState(0);

  switch (questionId) {
    case 0:
      return (
        <Question
          branch={initial}
          questionId={questionId}
          setAnswerValue={setVacancyId}
          questionClick={() => {
            setQuestionId(questionId + 1);
          }}
        />
      );

    case 1:
      return (
        <Question
          branch={initial}
          questionId={questionId}
          setAnswerValue={setAnswerValue}
          questionClick={() => {
            props.setBranchId(vacancyId);
            props.updateTotalScore(props.totalScore + answerValue);
          }}
        />
      );

    default:
      return null;
  }
}
