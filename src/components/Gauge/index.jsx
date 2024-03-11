import styles from "./Gauge.module.scss";
import cx from "classnames";

function Gauge(props) {
  return (
    <div className={styles.gaugeWrapper}>
      <div className={cx(styles.halfCircle, styles[props.meaning])}>
        <p className={styles.score}>Junior</p>
      </div>
    </div>
  );
}

export default Gauge;
