import BackToTop from "../../BackToTop";
import Title from "../../Title";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section id="services" className={styles.servicesWrapper}>
      <Title name="Serviços" />
      <main className={styles.cards}>
        <article className={styles.service}>
          <img src="images/website.png" alt="" />
          <h2>Websites</h2>
          <p>
            Desenvolvimento de sites web, mobile, desktop's, sistemas e blogs
            responsivos.
          </p>
        </article>
        <article className={styles.service}>
          <img src="images/inkwell.png" alt="" />
          <h2>Escrita Criativa</h2>
          <p>
            Cria-se sinopses, roteiros, histórias, biografias, redações, entre
            outros.
          </p>
        </article>
        <article className={styles.service}>
          <img src="images/writing.png" alt="" />
          <h2>Revisão Ortográfica</h2>
          <p>Revisão ortográfica completa de acordo com as normas ABNT.</p>
        </article>
      </main>
      <BackToTop href="#functions" customClass={styles.backToTop} />
    </section>
  );
};

export default Services;
