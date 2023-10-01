import BackToTop from "../../BackToTop";
import Card from "../../Card";
import Title from "../../Title";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsWrapper}>
      <Title name="Projetos" />
      <div className={styles.projectsCard}>
        <Card
          technologies={["Next.js", "Reac.tjs", "SASS", "Vercel", "Google Analytics"]}
          projectName="PolarizeMe"
          description="Aplicação web fascinante e interativa que permite que você transforme suas fotos comuns em belas imagens estilo polaroid."
          websiteHref="https://www.polarizeme.com.br/"
          githubHref="https://github.com/Rafa-Denlavor/polarizeme"
        />
        <Card
          technologies={["Next.js", "React.js", "SASS", "Vercel", "Google Analytics"]}
          projectName="Saúde Alimentos"
          description="Aplicação web para o restaurante Saúde Alimentos que valoriza a saúde e o sabor. O meso está localizado na cidade de São Vicente no Estado de São Paulo."
          websiteHref="https://saude-alimentos.vercel.app"
          githubHref="https://github.com/Rafa-Denlavor/saude-alimentos"
        />
        {/*
         <Card
          technologies={["JAVASCRIPT", "TYPESCRIPT", "react.js", "CSS", "Bohr.io"]}
          projectName="Pokédex"
          description="Pokeagenda para pesquisar, listar e visualizar a 1° geração de Pokemon. "
          websiteHref="https://pokedex-denlavor.bohr.io/"
          githubHref="https://github.com/Rafa-Denlavor/pokedex"
        />
        <Card
          technologies={["HTML", "CSS", "BOOTSTRAP"]}
          projectName="Fruta&Fruto"
          description="Website destinado para o compartilhamento de receitas saudáveis."
          websiteHref="https://rafa-denlavor.github.io/fruta-e-fruto/"
          githubHref="https://github.com/Rafa-Denlavor/fruta-e-fruto"
        />
        <Card
          technologies={["HTML", "CSS"]}
          projectName="Froya Barbershop"
          description="O Website inicialmente foi desenvolvido nos cursos de HTML e CSS ministrados pela Alura, porém, foram renovados com um novo design e layout."
          websiteHref="https://rafa-denlavor.github.io/froya-barbershop/"
          githubHref="https://github.com/Rafa-Denlavor/portfolio"
        />
        <Card
          technologies={["HTML", "CSS", "JAVASCRIPT"]}
          projectName="Nutrion"
          description="O Website inicialmente foi desenvolvido nos cursos de HTML e CSS ministrados pela Alura, porém, foram renovados com um novo design e layout."
          websiteHref="https://rafa-denlavor.github.io/nutrion/"
          githubHref="https://github.com/Rafa-Denlavor/nutrion"
        />
     */}
      </div>
      <BackToTop href="#books" />
    </section>
  );
};

export default Projects;
