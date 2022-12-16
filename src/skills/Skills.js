import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {

    const skillsItem = [
        {
            id: 1,
            name: "JS",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 2,
            name: "CSS",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 3,
            name: "React",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?" + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 4,
            name: "Redux",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem,?"
        },
        {
            id: 5,
            name: "TypeScript",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?" + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 6,
            name: "StoryBook",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        }
    ]

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>

                <h2 className={s.title}>
                    SKIILS
                </h2>

                <div className={s.skills}>
                    {skillsItem.map((s, index) => {
                        return (
                            <Skill key={index}
                                   title={s.name}
                                   image={s.image}
                                   description={s.description}/>
                        )
                    })}
                </div>

            </div>
        </div>
    )
};

export default Skills;
