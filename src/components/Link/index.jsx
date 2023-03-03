import styles from "./Link.module.scss";

const Link = ({ icon, href, hintText, download = false, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      title={hintText}
      download={download}
      className={styles.link}
    >
      {icon && <i className={icon} title={hintText}></i>}
      {title}
    </a>
  );
};

export default Link;
