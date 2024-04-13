import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";

const PlayGame = () => {
  const [selectetedNumber, setSelectedNumber] = useState();

  const [currentDice, setCurrentDice] = useState(1);

  const [score, setScore] = useState(0);

  const [error, setError] = useState("");

  const [showRules, setShowRules] = useState(false);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectetedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = generateNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectetedNumber === randomNumber)
      setScore((prev) => prev + randomNumber);
    else setScore((prev) => prev - 2);

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectetedNumber={selectetedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutLineButton onClick={resetScore}>Reset</OutLineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide " : "Show "}
          Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
