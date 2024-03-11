import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <img
        src="images/logo.png"
        alt="Logo Denlavor"
        title="Logo Denlavor"
        className={styles.logo}
      />
      <nav className={styles.navigation}>
        <div>
          <p>Veja as</p>
          <a href="#functions" className={styles.link}>
            Funções
          </a>
        </div>
        <div>
          <p>Explore</p>
          <a href="#projects" className={styles.link}>
            Projetos
          </a>
        </div>
        <div>
          <p>Conheça os</p>
          <a href="#books" className={styles.link}>
            Livros digitais
          </a>
        </div>
        <div>
          <p>Contrate</p>
          <a href="#services" className={styles.link}>
            Serviços
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
