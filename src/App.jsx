import './App.css';
import Header from "./components/Header/Header.jsx";
import Sobre from './components/Sobre/Sobre.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import ProjetoPk from './components/Projetos/ProjetoPk.jsx';
import ProjetoGs from './components/Projetos/ProjetoGs.jsx';
import Contato from './components/Contato/Contato.jsx';

export default function App() {

  return (
    <>
      <Header />
      <main>
      <Sobre />
      <Habilidades />
      <ProjetoPk />
      <ProjetoGs />
      </main>
      <Contato />
    </>
  )
};
