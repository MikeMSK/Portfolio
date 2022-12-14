import React from 'react';
import s from './Main.module.css'
import myPhoto from '../img/generalPhoto.jpeg'
import styleContainer from '../../src/common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>

                <div className={s.photo}>
                    <img src={myPhoto}
                         alt="general_photo"/>
                </div>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>Mikhail Deichman</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad beatae, commodi
                        consequuntur
                        dicta doloremque eius error exercitationem iure iusto nihil nulla numquam officia praesentium
                        qui
                        sapiente similique temporibus tenetur!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Main;
