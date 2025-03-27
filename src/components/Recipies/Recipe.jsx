import { RecipeInfo } from "../RecipeInfo/RecipeInfo";
import { RecipeList } from "./Recipe.styled";

export const Recipe = ({ recipe }) => {
  return (
    <RecipeList>
      {recipe.map(({ image, name, time, servings, calories, difficulty, id }) => (
        <RecipeInfo
          key={id}
          name={name}
          image={image}
          time={time}
          servings={servings}
          calories={calories}
          difficulty={difficulty}
        />
      ))}
    </RecipeList>
  );
};