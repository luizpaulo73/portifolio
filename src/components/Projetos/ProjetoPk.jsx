import "./Projetos.css";
import polipratik from "../img/polipratik.png";
import htmlLogo from "../img/html-5.png";
import cssLogo from "../img/css-3.png";
import jsLogo from "../img/js.png";

export default function Projeto() {
  return (
    <section id="meus-projetos" className="meus-projetos">
      <div className="projetos">
        <div className="info-projeto">
          <h1 className="h1-projeto">PolipratiK WebSite</h1>
          <p className="desc-projeto">
            Projeto realizado com HTML, CSS, JavaScript
          </p>
          <p className="desc-projeto"> e com prototipação realizada no Figma</p>
          <div className="logos-tecnologias">
            <div className="div-tecnologia">
              <img
                src={htmlLogo}
                alt="Logo HTML"
                className="tecnologias-utilizadas"
              />
            </div>
            <div className="div-tecnologia">
              <img
                src={cssLogo}
                alt="Logo CSS"
                className="tecnologias-utilizadas"
              />
            </div>
            <div className="div-tecnologia">
              <img
                src={jsLogo}
                alt="Logo JavaScript"
                className="tecnologias-utilizadas"
              />
            </div>
          </div>
        </div>
        <div className="lista-projetos">
          <div className="site">
            <img
              src={polipratik}
              alt="Site Polipratik"
              className="img-site"
            />
            <div className="links-projeto">
              <a
                href="https://github.com/luizpaulo73/site-polipratik"
                target="_blank"
                className="link-repositorio"
              >
                Repositorio GitHub
              </a>
              <a
                href="https://polipratik.com.br"
                target="_blank"
                className="acessar-projeto"
              >
                Ir para o site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
