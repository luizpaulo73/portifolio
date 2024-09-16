import "./Projetos.css";

import htmlLogo from "/img/html-5.png";
import cssLogo from "/img/css-3.png";
import jsLogo from "/img/js.png";

export default function Projetos(props) {
  
  
    return (
    <section id="meus-projetos" className="meus-projetos">
      <div className="projetos">
        <div className="info-projeto">
          <h1 className="h1-projeto">{props.titulo}</h1>
          <p className="desc-projeto">
            {props.desc1}
          </p>
          <p className="desc-projeto"> {props.desc2}</p>
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
              src={props.imgSite}
              alt="Site Polipratik"
              className="img-site"
            />
            <div className="links-projeto">
              <a
                href={props.linkRepositorio}
                target="_blank"
                className="link-repositorio"
              >
                Repositorio GitHub
              </a>
              <a
                href={props.linkSite}
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
  )
}
