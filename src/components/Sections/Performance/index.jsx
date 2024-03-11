import Title from "../../Title";
import styles from "./Performance.module.scss";
import Analytics from "../../Analytics";
import Gauge from "../../Gauge";

const Performance = () => {
  return (
    <section id="performance" className={styles.performanceWrapper}>
      <Title name="Desempenho" />
      <main>
        <Gauge />
        <aside>
          <Analytics title="Tempo de carreira" data="3" />
          <Analytics title="Demandas finalizadas" data="243" />
          <Analytics title="Habilidades e tecnologias aprendidas" data="46" />
        </aside>
      </main>

    </section>
  );
};

export default Performance;
