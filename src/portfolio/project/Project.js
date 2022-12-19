import React from 'react';
import s from './Project.module.css'


const Project = (props) => {
    return (
        <div className={s.projectBlock}>

            <div className={s.icon}>
                <button className={s.buttonView}>
                    VIEW
                </button>
                {/*<img src={props.image} alt="image project"/>*/}
            </div>

            <h3>{props.title}</h3>

            <span className={s.description}>
                {props.description}
            </span>

        </div>
    )

};

export default Project;
