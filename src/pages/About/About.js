import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { data } from "../../data/about";
import styles from "./About.module.scss";

function About() {
  const about = data;

  return (
    <div className="container flex-fill">
      <Banner />
      <main className={styles.about}>
        {about.map((about) => (
          <Collapse key={about.id} title={about.title} content={about.description} />
        ))}
      </main>
    </div>
  );
}

export default About;
