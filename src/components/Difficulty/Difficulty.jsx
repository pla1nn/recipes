import styled from "styled-components";

const colors = {
  0: "#D3CA79",
  1: "#EA7300",
};

export const Difficulty = ({ difficulty }) => {
  const difficulties = ["easy", "medium", "hard"];
  return (
    <DifficultyBox difficulty={difficulty}>
      {difficulties[difficulty]}
    </DifficultyBox>
  );
};

const DifficultyBox = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${({ difficulty }) => colors[difficulty] || "#A62C2C"};
  color: #000;
  font-size: 18px;
`;
