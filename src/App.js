import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Begin,
  Initial,
  Designer,
  Tester,
  Developer,
  Final,
} from "./components";

export function App() {
  const [totalScore, setTotalScore] = React.useState(0);
  const [branchId, setBranchId] = React.useState(-1);

  function updateTotalScore(newTotalScore) {
    if (newTotalScore < 0) setTotalScore(0);
    else if (newTotalScore > 100) setTotalScore(100);
    else setTotalScore(newTotalScore);
  }

  function render() {
    switch (branchId) {
      case -1:
        return <Begin setBranchId={setBranchId} />;

      case 0:
        return (
          <Initial
            setBranchId={setBranchId}
            totalScore={totalScore}
            updateTotalScore={updateTotalScore}
          />
        );

      case 1:
        return (
          <Designer
            setBranchId={setBranchId}
            totalScore={totalScore}
            updateTotalScore={updateTotalScore}
          />
        );

      case 2:
        return (
          <Tester
            setBranchId={setBranchId}
            updateTotalScore={updateTotalScore}
          />
        );

      case 3:
        return (
          <Developer
            setBranchId={setBranchId}
            totalScore={totalScore}
            updateTotalScore={updateTotalScore}
          />
        );

      case 4:
        return <Final totalScore={totalScore} />;

      default:
        return null;
    }
  }

  return (
    <Container>
      {![-1, 2, 4].includes(branchId) && (
        <Row
          className="text-muted justify-content-end mb-4 fs-5"
          style={{ paddingRight: "12px" }}
        >
          {totalScore + "%"}
        </Row>
      )}
      {render()}
    </Container>
  );
}
