import './App.css';
import Header from "./components/Header/Header.jsx";
import Sobre from './components/Sobre/Sobre.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import Contato from './components/Contato/Contato.jsx';
import polipratik from "./components/img/polipratik.png";
import proOcean from "./components/img/proocean.png";
import Projetos from './components/Projetos/Projetos.jsx';

export default function App() {

  const titulo = ["PolipratiK WebSite" , "Projeto ProOcean"]
  const desc1 = ["Projeto realizado com HTML, CSS, JavaScript" , "Projeto realizado com HTML, CSS, JavaScript e com prototipação realizada no Figma"]
  const desc2 = ["e com prototipação realizada no Figma" , "Desenvolvido para a realização do trabalho semestral da FIAP"]
  const imgSite = [polipratik , proOcean]
  const linkRepositorio = ["https://github.com/luizpaulo73/site-polipratik" , "https://github.com/yunkbaza/Global_Solution_ProOcean"]
  const linkSite = ["https://polipratik.com.br" , "#"]

  return (
    <>
      <Header />
      <main>
      <Sobre />
      <Habilidades />
      <Projetos titulo={titulo[0]} desc1={desc1[0]} desc2={desc2[0]} imgSite={imgSite[0]} linkRepositorio={linkRepositorio[0]} linkSite={linkSite[0]}/>
      <Projetos titulo={titulo[1]} desc1={desc1[1]} desc2={desc2[1]} imgSite={imgSite[1]} linkRepositorio={linkRepositorio[1]} linkSite={linkSite[1]}/>
      </main>
      <Contato />
    </>
  )
};
