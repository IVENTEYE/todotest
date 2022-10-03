import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Button from '../Button'
import styles from './index.module.scss'

function Prompt({ image, text }) {
    const [promptVisible, setPromptVisible] = useState(false);

    const closePrompt = () => {
        setPromptVisible(false);
    }

    // let deferredPrompt;

    // window.addEventListener('beforeinstallprompt', (e) => {
    //     e.preventDefault();
    //     deferredPrompt = e;
    //     console.log(`'beforeinstallprompt' event was fired.`);
    //   });

    //   useEffect(() => {

    //   }, [])
      
    return (
        <div className={ promptVisible ? styles.prompt + ' ' + styles._active : styles.prompt}>
            <div className={styles.prompt__body}>
                <div className={styles.prompt__items}>
                    <div className={styles.prompt__image}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.prompt__text}>{text}</div>
                </div>
                <div className={styles.prompt__buttons}>
                    <Button text="Не добавлять" onClick={closePrompt}/>
                    <Button text="Добавить"/>
                </div>
            </div>
        </div>
    )
}

export default Prompt