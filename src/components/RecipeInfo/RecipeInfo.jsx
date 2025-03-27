import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { PiGrains } from "react-icons/pi";
import { LuCookingPot } from "react-icons/lu";
import { RecipeItem, RecipeImg, RecipeContainer, RecipeTitle, RecipeText } from "./RecipeInfo.styled";

export const RecipeInfo = ({ id, image, name, time, servings, calories, difficulty }) => {
    return (
        <RecipeItem key={id}>
            <RecipeImg src={image} alt={name} width="400" />
            <RecipeContainer>
                <RecipeTitle>{name}</RecipeTitle>
                <RecipeText><IoMdTime size={20} /> {time} mins</RecipeText>
                <RecipeText><IoMdPeople size={20} /> {servings} servings</RecipeText>
                <RecipeText><PiGrains size={20} /> {calories}kkal</RecipeText>
                <RecipeText><LuCookingPot size={20} /> Difficulty: {difficulty}</RecipeText>
            </RecipeContainer>
        </RecipeItem>
    );
};

RecipeInfo.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number,
};