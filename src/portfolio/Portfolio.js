import React from 'react';
import s from './Portfolio.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import Project from './project/Project'


const Portfolio = () => {

    const projectItem = [
        {
            id: 1,
            name: "Native JS project",
            image: "https://www.freeiconspng.com/thumbs/project-icon/project-icon-31.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 2,
            name: "Social Network",
            image: "https://www.freeiconspng.com/thumbs/project-icon/project-icon-31.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 3,
            name: "React project",
            image: "https://www.freeiconspng.com/thumbs/project-icon/project-icon-31.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?" + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem?"
        },
        {
            id: 4,
            name: "Redux-Redux-Material UI project",
            image: "https://www.freeiconspng.com/thumbs/project-icon/project-icon-31.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolor illo" +
                " impedit ipsum maiores non numquam omnis recusandae sequi! Cupiditate dolore dolores ducimus fugit" +
                " laborum natus quas quasi quidem rem,?"
        }
    ]

    return (
        <div className={s.portfolioBlock}>
            <div className={`${styleContainer.container}${s.portfolioContainer}`}>

                <h2 className={s.title}>
                    PORTFOLIO
                </h2>

                <div className={s.project}>
                    {projectItem.map((s, index) => {
                        return (
                            <Project
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

export default Portfolio;
