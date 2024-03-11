import styles from "./Functions.module.scss";
import Link from "../../Link";
import BackToTop from "../../BackToTop";

const Functions = () => {
  return (
    <section id="functions" className={styles.functionsWrapper}>
      <h1 className={styles.title}>3 em 1</h1>
      <div className={styles.containerPositions}>
        <figure className={styles.positions}>
          <img src="images/writer.svg" alt="" />
          <figcaption>Ghostwriter</figcaption>
        </figure>
        <figure className={styles.positions}>
          <img src="images/developer.svg" alt="" />
          <figcaption>Javascript Developer</figcaption>
        </figure>
        <figure className={styles.positions}>
          <img src="images/software-engineer.svg" alt="" />
          <figcaption>Software Engineer</figcaption>
        </figure>
      </div>
      <nav className={styles.contacts}>
        <Link
          icon="fab fa-linkedin-in"
          href="https://www.linkedin.com/in/rafaella-denlavor-a9708b199/"
          hintText="Acesse o Linkedin"
        />
        <Link
          icon="fab fa-whatsapp"
          href="tel:+5511960307271"
          hintText="Acesse o Whatsapp"
        />
        <Link
          icon="fab fa-github"
          href="https://github.com/Rafa-Denlavor"
          hintText="Acesse o GitHub"
        />
        <Link
          icon="fas fa-file-download"
          href="rafaella-lopes.pdf"
          hintText="Baixe o currículo"
          download
        />
      </nav>
      <BackToTop href="#projects" />
    </section>
  );
};

export default Functions;
