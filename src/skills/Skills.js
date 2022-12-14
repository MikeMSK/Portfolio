import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {

    const skillsItem = [
        {
            id: 1,
            name: "JS",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 2,
            name: "CSS",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 3,
            name: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 4,
            name: "Redux",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem,?"
        },
        {
            id: 5,
            name: "TypeScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 6,
            name: "StoryBook",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        }
    ]

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>

                <h2 className={s.title}>SKIILS</h2>
                <div className={s.skills}>
                    {skillsItem.map(s => {
                        return (
                            <Skill title={s.name}
                                   description={s.description}/>
                        )
                    })}
                </div>

            </div>
        </div>
    )
};

export default Skills;
