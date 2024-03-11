import styles from "./Analytics.module.scss";

const Analytics = ({ title, data }) => {
  return (
    <article className={styles.analytics}>
      <h3>{title}</h3>
      <span>{data}</span>
    </article>
  );
};

export default Analytics;
