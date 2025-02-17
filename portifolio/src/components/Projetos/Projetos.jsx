import styles from './Projetos.module.css';
import { listaProjetos } from "./data";

export default function Projetos() {
  
    return (
    <section id="meus-projetos" className={styles.meusProjetos}>
      {listaProjetos.map((projeto, index) => (
        <div key={index} className={styles.projetos}>
          <div className={styles.infoProjeto}>
            <h1 className={styles.h1Projeto}>{projeto.title}</h1>
            <p className={styles.descProjeto}>{projeto.desc1}</p>
            <p className={styles.descProjeto}>{projeto.desc2}</p>
            <div className={styles.logosTecnologias}>
              {projeto.tecnologiaUtilizada.map((tecnologia, techIndex) => (
                <div key={techIndex} className={styles.divTecnologia}>
                  <img
                    src={tecnologia}
                    alt={`logo ${tecnologia}`}
                    className={styles.tecnologiasUtilizadas}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.listaProjetos}>
            <div className={styles.site}>
              <img
                src={projeto.imgSite}
                alt="Site Polipratik"
                className={styles.imgSite}
              />
              <div className={styles.linksProjeto}>
                {projeto.linkRepositorio ?
                <a
                  href={projeto.linkRepositorio}
                  target="_blank"
                  className={styles.linkRepositorio}
                >
                  Repositorio GitHub
                </a> : null}
                <a
                  href={projeto.linkSite}
                  target="_blank"
                  className={styles.acessarProjeto}
                >
                  Ir para o site
                </a>
              </div>
            </div>
          </div>
        </div>  
      ))}
    </section>
  )
}
