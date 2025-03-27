import { RecipeInfo } from "../RecipeInfo/RecipeInfo";
import css from "./Recipe.module.css";

export const Recipe = ({ recipe }) => {
  return (
    <ul className={css.recipe__list}>
      {recipe.map(
        ({ image, name, time, servings, calories, difficulty, id }) => {
          return (
            <RecipeInfo
              key={id}
              name={name}
              image={image}
              time={time}
              servings={servings}
              calories={calories}
              difficulty={difficulty}
            />
          );
        }
      )}
    </ul>
  );
};
