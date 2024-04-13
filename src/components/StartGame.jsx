import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <div>
      <Container>
        <div>
          <img src="./images/dice.png" alt="dice image" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
