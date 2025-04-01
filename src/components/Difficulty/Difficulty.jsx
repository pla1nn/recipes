import styled from "styled-components";

const colors = {
  0: "#00FF00",
  1: "#FFFF00",
  3: "#FF0000",
};

export const Difficulty = ({ difficulty }) => {
  const difficulties = { 0: "easy", 1: "medium", 3: "hard" };
  return (
    <DifficultyBox difficulty={difficulty}>
      {difficulties[difficulty]}
    </DifficultyBox>
  );
};

const DifficultyBox = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${({ difficulty }) => colors[difficulty] || "#FF0000"};
  color: white;
  font-size: 18px;
`;
