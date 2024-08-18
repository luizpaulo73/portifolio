import "./Sobre.css";
import cv from '../cv/luiz-paulo.pdf'

export default function Sobre() {
  return (
    <section id="sobre-mim">
      <div className="infos">
        <h1 className="saudacao">Olá, eu sou o</h1>
        <h1 className="nome">{"</Luiz Paulo>"}</h1>
        <p className="dev">Desenvolvedor</p>
        <div className="links-uteis">
        <a href="https://github.com/luizpaulo73" target="_blank" className="link-github">GitHub</a>
        <a href={cv} download="Currículo Luiz Paulo.pdf" className="link-cv">Curriculo</a>
        <a href="https://www.linkedin.com/in/luizpaulo73/" target="_blank" className="link-linkedin">LinkedIn</a>
        </div>
      </div>
      <div className="resumo">
        <p>
          Estudante de Analide e Desenvolvimento de Sistemas na FIAP com
          conhecimentos em HTML, CSS, JavaScript, React.js, Bootstrap e Git.
        </p>
      </div>
    </section>
  );
};
