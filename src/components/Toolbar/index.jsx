import React from 'react'
import { useContext } from 'react'
import AppContext from '../../context'
import styles from './index.module.scss'

function Toolbar() {
    const { onSelectNote, onRemoveNote, noteRedactId, notes, setConfirmModal } = useContext(AppContext);
    const noteSelectedValue = notes.filter(note => note.id === noteRedactId)[0].selected;
    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbar__items}>
                <button
                    type='button'
                    className={ noteSelectedValue ? styles.toolbar__item + ' ' + styles._active : styles.toolbar__item}
                    onClick={onSelectNote}
                >
                    <div className={styles.item__icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" /></svg>
                    </div>
                    <p className={styles.item__text}>{noteSelectedValue ? 'В избранном' : "Избранное"}</p>
                </button>
                <button
                    type='button'
                    className={styles.toolbar__item}
                    onClick={() => setConfirmModal(true)}
                >
                    <div className={styles.item__icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
                    </div>
                    <p className={styles.item__text}>Удалить</p>
                </button>
            </div>
        </div>
    )
}

export default Toolbar