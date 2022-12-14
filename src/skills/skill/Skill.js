import React from 'react';
import s from './Skill.module.css'


const Skill = (props) => {
    return (
        <div className={s.skillBlock}>

            <div className={s.icon}>
                <img src={props.image} alt="image skill"/>
            </div>

            <h3>{props.title}</h3>

            <span className={s.description}>
                {props.description}
            </span>

        </div>
    )
};

export default Skill;