import styles from './Sobre.module.css';
import cv from '/cv/luiz-paulo.pdf'

export default function Sobre() {
  return (
    <section id="sobre-mim" className={styles.sobreMim}>
      <div className={styles.infos}>
        <h1 className={styles.saudacao}>Olá, eu sou o</h1>
        <h1 className={styles.nome}>{"</Luiz Paulo>"}</h1>
        <p className={styles.dev}>Desenvolvedor Front-end</p>
        <div className={styles.linksUteis}>
          <a href="https://github.com/luizpaulo73" target="_blank" className={styles.linkGithub}>GitHub</a>
          <a href={cv} download="Currículo Luiz Paulo.pdf" className={styles.linkCv}>Currículo</a>
          <a href="https://www.linkedin.com/in/luizpaulo73/" target="_blank" className={styles.linkLinkedin}>LinkedIn</a>
        </div>
      </div>
      <div className={styles.resumo}>
        <p>
          Estudante de Análise e Desenvolvimento de Sistemas na FIAP
        </p>
      </div>
    </section>
  );
};