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
          technologies={[
            "Typescript",
            "React.js",
            "SASS",
            "Vite.js",
            "Cypress"
          ]}
          projectName="Shinobi Keyboard"
          createdAt="2024"
          description="Mini game de digitação com efeitos sonoros, níveis de dificuldade, painel de classificação e muito mais."
          websiteHref="https://shinobi-keyboard.vercel.app"
          githubHref="https://github.com/Rafa-Denlavor/shinobi-keyboard"
        />
        <Card
          technologies={[
            "HTML",
            "CSS",
            "Javascript",
            "Node.js",
            "WebSockets",
            "Vercel",
            "Render",
          ]}
          projectName="GhostGabble"
          createdAt="2024"
          description="Plataforma que oferece uma experiência de bate-papo instantâneo, conectando pessoas de todo o mundo de forma anônima."
          websiteHref="https://ghostgabble.vercel.app/"
          githubHref="https://github.com/Rafa-Denlavor/ghostgabble"
        />
        <Card
          technologies={[
            "Next.js",
            "Reac.tjs",
            "SASS",
            "Vercel",
            "Google Analytics",
          ]}
          projectName="PolarizeMe"
          createdAt="2023"
          description="Aplicação web fascinante e interativa que permite que você transforme suas fotos comuns em belas imagens estilo polaroid."
          websiteHref="https://www.polarizeme.com.br/"
          githubHref="https://github.com/Rafa-Denlavor/polarizeme"
        />
        <Card
          technologies={["Next.js", "React.js", "SASS", "Vercel"]}
          projectName="Saúde Alimentos"
          createdAt="2023"
          description="Aplicação web para o restaurante que valoriza a saúde e o sabor. O mesmo está localizado na cidade de São Vicente no Estado de São Paulo."
          websiteHref="https://saude-alimentos.vercel.app"
          githubHref="https://github.com/Rafa-Denlavor/saude-alimentos"
        />
        <Card
          technologies={[
            "JAVASCRIPT",
            "TYPESCRIPT",
            "react.js",
            "CSS",
            "Bohr.io",
          ]}
          projectName="Pokédex"
          createdAt="2022"
          description="Aplicação web projetada para permitir que os entusiastas e fãs de Pokémon explorem os Pokémon da primeira geração de forma interativa."
          websiteHref="https://pokedex-denlavor.bohr.io/"
          githubHref="https://github.com/Rafa-Denlavor/pokedex"
        />
        <Card
          technologies={["HTML", "CSS"]}
          projectName="Froya Barbershop"
          createdAt="2020"
          description="O Website inicialmente foi desenvolvido nos cursos de HTML e CSS ministrados pela Alura, porém, foram renovados com um novo design e layout."
          websiteHref="https://rafa-denlavor.github.io/froya-barbershop/"
          githubHref="https://github.com/Rafa-Denlavor/portfolio"
        />
      </div>
      <BackToTop href="#books" />
    </section>
  );
};

export default Projects;
