import styles from "./Contato.module.css";
import email from "/img/email.png";
import github from "/img/github.png";
import linkedin from "/img/linkedin.png";

export default function Contato() {
  return (
    <footer className={styles.contato} id="contato" >
      <h1 className={styles.tituloContato}>Contato</h1>
      <div className={styles.contatos}>
        <div className={styles.box}>
          <a href="mailto:luiz.paulo2005@hotmail.com">
            <img src={email} alt="Email" />
          </a>
          <p>E-mail</p>
        </div>
        <div className={styles.box}>
          <a href="https://www.linkedin.com/in/luizpaulo73/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <p>LinkedIn</p>
        </div>
        <div className={styles.box}>
          <a href="https://github.com/luizpaulo73">
            <img src={github} alt="GitHub" />
          </a>
          <p>GitHub</p>
        </div>
      </div>
    </footer>
  );
}
