import styles from "./BackToTop.module.scss";

const BackToTop = ({ href, customClass }) => {
  return (
    <a href={href} className={customClass}>
      <img
        src="images/arrowToBottom.png"
        alt="Seta que direciona para o próxima seção"
        className={styles.arrow}
      />
    </a>
  );
};

export default BackToTop;
