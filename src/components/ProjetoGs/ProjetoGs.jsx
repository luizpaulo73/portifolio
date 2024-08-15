import "./ProjetoGs.css";
import polipratik from "../img/proocean.png";
import htmlLogo from "../img/html-5.png";
import cssLogo from "../img/css-3.png";
import jsLogo from "../img/js.png";

export default function ProjetoGs() {
  return (
    <section id="meus-projetos">
      <div className="projetos">
        <div className="info-projeto">
          <h1 className="h1-projeto">Projeto ProOcean</h1>
          <p className="desc-projeto">
            Projeto realizado com HTML, CSS, JavaScript
          </p>
          <p className="desc-projeto"> e com prototipação realizada no Figma</p>
          <p className="desc-projeto">Desenvolvido para a realização do trabalho</p><p className="desc-projeto"> semestral da FIAP</p>
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
          <div className="site-pk">
            {/* <h2 className='titulo-site'>Site da PolipratiK</h2> */}
            <img
              src={polipratik}
              alt="Site Polipratik"
              className="img-site-pk"
            />
            <div className="links-projeto">
              <a
                href="https://github.com/yunkbaza/Global_Solution_ProOcean"
                target="_blank"
                className="link-repositorio"
              >
                Repositorio GitHub
              </a>
              <a
                href="#"
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
};
