import './App.css';
import Header from "./components/Header/Header.jsx";
import Sobre from './components/Sobre/Sobre.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import ProjetoPk from './components/ProjetoPk/ProjetoPk.jsx';
import ProjetoGs from './components/ProjetoGs/ProjetoGs.jsx';

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
    </>
  )
};
