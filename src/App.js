import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Homepage/Content";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
