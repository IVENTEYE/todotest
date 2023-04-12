import React from 'react';
import styles from './index.module.scss';

function Header({ theme, setTheme, setDonatModal }) {
    const headerRef = React.useRef();
    const headerTitleRef = React.useRef();
    const headerSunRef = React.useRef();
    const headerMoonRef = React.useRef();

// Уменьшение шапки в момент скролла. Доработать для более плавной работы.
  // if (window.innerWidth < 540) {
  //   const pmin = 12,
  //     pmax = 15,
  //     fmin = 19,
  //     fmax = 22,
  //     bmin = 18,
  //     bmax = 20;

  //   const resetSizes = () => {
  //     headerRef.current.style.paddingTop = 15 + 'px';
  //     headerRef.current.style.paddingBottom = 15 + 'px';
      
  //     headerTitleRef.current.style.fontSize = 22 + 'px';
  
  //     headerSunRef.current.style.width = 20 + 'px';
  //     headerSunRef.current.style.height = 20 + 'px';
  
  //     headerMoonRef.current.style.width = 20 + 'px';
  //     headerMoonRef.current.style.height = 20 + 'px';
  //   };

  //   window.addEventListener('scroll', function () {
  //     const s = window.pageYOffset; // current scrollTop
  //     const padding =
  //       pmax - ((pmax - pmin) * s) / (document.body.scrollHeight - window.innerHeight);
  //     const fontSize =
  //       fmax - ((fmax - fmin) * s) / (document.body.scrollHeight - window.innerHeight);
  //     const buttonSize =
  //       bmax - ((bmax - bmin) * s) / (document.body.scrollHeight - window.innerHeight);

  //     headerRef.current.style.paddingTop = padding + 'px';
  //     headerRef.current.style.paddingBottom = padding + 'px';
      
  //     headerTitleRef.current.style.fontSize = fontSize + 'px';

  //     headerSunRef.current.style.width = buttonSize + 'px';
  //     headerSunRef.current.style.height = buttonSize + 'px';

  //     headerMoonRef.current.style.width = buttonSize + 'px';
  //     headerMoonRef.current.style.height = buttonSize + 'px';

  //     if (s === 0) {
  //       resetSizes();
  //     }
  //   });
  // }

  return (
    <header ref={headerRef} className={styles.todo__header}>
      <h1 ref={headerTitleRef} className={styles.todo__headerTitle}>
        Todo
      </h1>
      <button
        ref={headerMoonRef}
        className={
          theme === 'light'
            ? styles.themeButton + ' ' + styles.themeButtonMoon + ' ' + styles.active
            : styles.themeButton + ' ' + styles.themeButtonMoon
        }
        onClick={() => setTheme('dark')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z" />
        </svg>
      </button>
      <button
        ref={headerSunRef}
        className={
          theme === 'dark'
            ? styles.themeButton + ' ' + styles.themeButtonSun + ' ' + styles.active
            : styles.themeButton + ' ' + styles.themeButtonSun
        }
        onClick={() => setTheme('light')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z" />
        </svg>
      </button>
      {/* <button
                className={styles.donateButton}
                onClick={() => {
                    setDonatModal(true);
                }}
            >
                <img src='./img/donate-button.svg' />
            </button> */}
    </header>
  );
}

export default Header;
