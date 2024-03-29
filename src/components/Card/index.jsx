import styles from "./Card.module.scss";
import Link from "../Link";

const Card = ({
  technologies,
  projectName,
  createdAt,
  description,
  websiteHref,
  githubHref,
}) => {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.technologies}>
        {technologies.map((tecnology) => {
          return (
            <p key={tecnology} className={styles.tool}>
              {tecnology}
            </p>
          );
        })}
      </div>
      <div>
        <h2>{projectName}</h2>
        <p className={styles.createdAt}>{`Criado em ${createdAt}`}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttons}>
        <Link
          icon="fas fa-external-link-alt"
          href={websiteHref}
          hintText="Acesse o website"
        />
        <Link
          icon="fab fa-github-alt"
          href={githubHref}
          hintText="Acesse o GitHub"
        />
      </div>
    </article>
  );
};

export default Card;
