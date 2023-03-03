import BackToTop from "../../BackToTop";
import Link from "../../Link";
import Title from "../../Title";
import styles from "./Books.module.scss";

const Books = () => {
  return (
    <section id="books" className={styles.booksWrapper}>
      <Title name="Livros" />
      <main className={styles.trajectory}>
        <article className={styles.careerInfo}>
          <h2>Carreira</h2>
          <div className={styles.description}>
            <p>
              Extasiei-me com a possibilidade de redigir histórias no dia 5 de
              julho de 2018, aos meus 15 anos, quando produzi e publiquei o meu
              primeiro livro no Wattpad: The New Patient.
            </p>
            <p>
              Perdi-me em planos para aprimorar minhas habilidades, o que causou
              o fim deste mesmo livro e deu início ao segundo: Minha Frentista
              de Cada Dia, que hoje conta com mais de 42 mil leituras. Em
              seguida, entrei de cabeça na escrita criativa.
            </p>
            <p>
              Atualmente sou escritora freelancer com 4 anos de experiência e
              ofereço diversos serviços referente a escrita criativa.
            </p>
          </div>
          <Link
            href="https://www.wattpad.com/user/Rafa-Denlavor"
            title="Saiba mais.."
          />
        </article>
        <figure className={styles.booksBox}>
          <img
            src="minha-frentista.jpg"
            alt="Livro do Wattpad, Minha Frentista de Cada dia"
            className={styles.bookCover}
          />
          <img
            src="varas-&-cadernos.jpg"
            alt="Livro do Wattpad, Varas e Cadernos"
            className={styles.bookCover}
          />
          <img
            src="amnesia-com.jpg"
            alt="Livro do Wattpad, Amnésia.com"
            className={styles.bookCover}
          />
        </figure>
      </main>
      <BackToTop href="#services" />
    </section>
  );
};

export default Books;
