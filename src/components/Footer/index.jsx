import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <article className={styles.reservedRights}>
        <img src="images/logo.png" alt="Logo da Denlavor" />
        <span>©2023 | Todos os direitos reservados</span>
      </article>
    </footer>
  );
};

export default Footer;
