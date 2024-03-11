import BackToTop from "../../BackToTop";
import Title from "../../Title";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section id="services" className={styles.servicesWrapper}>
      <Title name="Serviços" />
      <main className={styles.cards}>
        <article className={styles.service}>
          <img src="images/web-development.svg" alt="" />
          <h2>Desenvolvimento Web</h2>
          <p>
            Este serviço abrange desde a criação de websites informativos e
            institucionais até a criação de blogs, portfólios online, páginas de
            destino e lojas virtuais (e-commerce).
          </p>
        </article>
        <article className={styles.service}>
          <img src="images/web-applications.svg" alt="" />
          <h2>Aplicações Web</h2>
          <p>
            Este serviço envolve o desenvolvimento de aplicativos web sob
            medida, incluindo funcionalidades avançadas de interação,
            gerenciamento de usuários, manipulação de dados em tempo real,
            integração com APIs externas, entre outros.
          </p>
        </article>
        <article className={styles.service}>
          <img src="images/software-development.svg" alt="" />
          <h2>Desenvolvimento de Software</h2>
          <p>
            Este serviço abrange o ciclo completo de desenvolvimento de
            software, desde a concepção e análise de requisitos até o design,
            implementação, teste e manutenção de aplicativos de software
            personalizados, como ERP e CRM.
          </p>
        </article>
        <article className={styles.service}>
          <img src="images/creative-writing.svg" alt="" />
          <h2>Escrita Criativa</h2>
          <p>
            Este serviço abrange o ciclo completo de desenvolvimento de
            software, desde a concepção e análise de requisitos até o design,
            implementação, teste e manutenção de aplicativos de software
            personalizados, como ERP e CRM.
          </p>
        </article>
      </main>
      <BackToTop href="#functions" customClass={styles.backToTop} />
    </section>
  );
};

export default Services;
