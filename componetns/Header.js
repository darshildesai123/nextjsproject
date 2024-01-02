import styles from '../styles/index.module.css'
import Navbar from './Navbar';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand_box}>
          <Navbar />

          <div className={styles.text_box}>
            <h1 className={styles.heading_primary}>
              <span className={styles.heading_primary_main}>
                Welcome to the world of ReactJS
              </span>
              &nbsp;&nbsp;
              <span>JavaScript</span>
            </h1>
            <a
              href="#"
              className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
            >
              Thapa
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
