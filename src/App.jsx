import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sobre from "./components/Sobre/Sobre.jsx";
import Habilidades from "./components/Habilidades/Habilidades.jsx";
import Contato from "./components/Contato/Contato.jsx";
import Projetos from "./components/Projetos/Projetos.jsx";
import { projetoPk } from "./Data.jsx";
import { projetoGs } from "./Data.jsx";
// import { projetoKGV } from "./Data.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <Habilidades />
        <Projetos titulo={projetoPk[0].title}
                  desc1={projetoPk[0].desc1}
                  desc2={projetoPk[0].desc2}
                  imgSite={projetoPk[0].imgSite}
                  linkRepositorio={projetoPk[0].linkRepositorio}
                  linkSite={projetoPk[0].linkSite}
        />
        <Projetos titulo={projetoGs[0].title}
                  desc1={projetoGs[0].desc1}
                  desc2={projetoGs[0].desc2}
                  imgSite={projetoGs[0].imgSite}
                  linkRepositorio={projetoGs[0].linkRepositorio}
                  linkSite={projetoGs[0].linkSite}
        />
        {/* <Projetos titulo={projetoKGV[0].title}
                  desc1={projetoGs[0].desc1}
                  desc2={projetoGs[0].desc2}
                  imgSite={projetoGs[0].imgSite}
                  linkRepositorio={projetoGs[0].linkRepositorio}
                  linkSite={projetoGs[0].linkSite}

        /> */}
      </main>
      <Contato />
    </>
  );
}
