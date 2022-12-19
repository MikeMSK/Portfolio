import React from 'react';
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>

                <h2 className={s.title}>
                    CONTACTS
                </h2>

                <form className={s.contactsForm} action="">
                    <input/>
                    <input/>
                    <textarea name="contactsForm">

                        </textarea>
                </form>

                <button className={s.buttonSend}>
                    SEND
                </button>

            </div>
        </div>
    );
};

export default Contacts;
