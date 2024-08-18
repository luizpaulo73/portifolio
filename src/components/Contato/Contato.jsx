import "./Contato.css";
import email from "../img/email.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export default function Contato() {
  return (
    <footer id="contato">
      <h1 className="titulo-contato">Contato</h1>
      <div className="contatos">
        <div className="box">
          <a href="mailto:luiz.paulo2005@hotmail.com">
            <img src={email} alt="" />
          </a>
          <p>E-mail</p>
        </div>
        <div className="box">
          <a href="https://www.linkedin.com/in/luizpaulo73/">
            <img src={linkedin} alt="" />
          </a>
          <p>LinkedIn</p>
        </div>
        <div className="box">
          <a href="https://github.com/luizpaulo73">
            <img src={github} alt="" />
          </a>
          <p>GitHub</p>
        </div>
      </div>
    </footer>
  );
}
