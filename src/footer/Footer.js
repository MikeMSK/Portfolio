import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>

                <h4 className={s.title}>
                    Mikhail Deichman
                </h4>

                <div className={s.socialNetwork}>
                    <div className={s.socialNetworkBlock}></div>
                    <div className={s.socialNetworkBlock}></div>
                    <div className={s.socialNetworkBlock}></div>
                    <div className={s.socialNetworkBlock}></div>
                </div>


                <div className={s.copyright}>
                    &#174;2022 All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
