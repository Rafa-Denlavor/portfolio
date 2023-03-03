import BackToTop from "../../BackToTop";
import Card from "../../Card";
import Title from "../../Title";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsWrapper}>
      <Title name='Projetos' />
      <div className={styles.projectsCard}>
        <Card
          technologies={["HTML", "CSS"]}
          projectName="Froya Barbershop"
          description="O Website inicialmente foi desenvolvido nos cursos de HTML e CSS ministrados pela Alura, porém, foram renovados com um novo design e layout."
          websiteHref="https://rafa-denlavor.github.io/froya-barbershop/"
          githubHref="https://github.com/Rafa-Denlavor/portfolio"
          />
        <Card
          technologies={["HTML", "CSS", "BOOTSTRAP"]}
          projectName="Fruta&Fruto"
          description="Website destinado para o compartilhamento de receitas saudáveis."
          websiteHref="https://rafa-denlavor.github.io/froya-barbershop/"
          githubHref="https://github.com/Rafa-Denlavor/fruta-e-fruto"
          />
        <Card
          technologies={["HTML", "CSS", "JAVASCRIPT"]}
          projectName="Nutrion"
          description="O Website inicialmente foi desenvolvido nos cursos de HTML e CSS ministrados pela Alura, porém, foram renovados com um novo design e layout."
          websiteHref="https://rafa-denlavor.github.io/fruta-e-fruto/"
          githubHref="https://github.com/Rafa-Denlavor/nutrion"
          />
        <Card
          technologies={["JAVASCRIPT", "TYPESCRIPT", "REACT", "CSS"]}
          projectName="Pokédex"
          description="Pokeagenda para visualizar a 1° geração de Pokemon."
          websiteHref="https://rafa-denlavor-pokedex.bohr.io/"
          githubHref="https://github.com/Rafa-Denlavor/pokedex"
          />
      </div>
      <BackToTop href="#books"/>
    </section>
  );
};

export default Projects;
