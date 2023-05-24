import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { data } from "../../data/about";
import styles from "./About.module.scss";

function About() {
  const aboutData = data;

  return (
    <main className="container flex-fill">
      <Banner />
      <div className={styles.about}>
        {aboutData.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            content={item.description}
          />
        ))}
      </div>
    </main>
  );
}

export default About;
