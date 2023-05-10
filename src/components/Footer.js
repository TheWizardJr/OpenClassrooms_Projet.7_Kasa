import footerlogo from "../assets/images/footer-logo.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-column align-items-center`}
    >
      <div>
        <img src={footerlogo} alt="" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
