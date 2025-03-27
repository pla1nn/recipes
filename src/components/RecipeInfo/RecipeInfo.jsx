import PropTypes from 'prop-types';
import css from "./RecipeInfo.module.css";
import { IoMdTime } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { PiGrains } from "react-icons/pi";
import { LuCookingPot } from "react-icons/lu";


export const RecipeInfo = ({id, image, name, time, servings, calories, difficulty}) => {
    return (
        <li className={css.recipe__item} key={id}>
            <img className={css.recipe__img} src={image} alt={name} width='400' />
            <div className={css.recipe__container}>
                <h2 className={css.recipe__title}>{name}</h2>
                <p className={css.recipe__text}><IoMdTime size={20}/> time for cook: {time}</p>
                <p className={css.recipe__text}><IoMdPeople size={20}/> serving for: {servings} people</p>
                <p className={css.recipe__text}><PiGrains size={20}/> calories: {calories}kkal</p>
                <p className={css.recipe__text}><LuCookingPot size={20}/> cooking difficulty: {difficulty}</p>
            </div>
        </li>
    )
}

RecipeInfo.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number,
}