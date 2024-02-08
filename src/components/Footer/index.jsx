import styles from "./style.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_row}>
          <div className={styles.footer_side}>
            <h1>AS</h1>
          </div>
          <div className={styles.footer_side}>
            <h1>&copy; 2023-2024 Peronal</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
