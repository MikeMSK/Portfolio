import React from 'react';
import s from './DistantWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

const DistantWork = () => {
    return (
        <div className={s.distantBlock}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>

                <h2 className={s.title}>
                    Considering remote work options
                </h2>

                <button className={s.buttonHire}>HIRE ME</button>

            </div>
        </div>
    );
};

export default DistantWork;
