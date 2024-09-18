import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sobre from "./components/Sobre/Sobre.jsx";
import Habilidades from "./components/Habilidades/Habilidades.jsx";
import Contato from "./components/Contato/Contato.jsx";
import Projetos from "./components/Projetos/Projetos.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <Habilidades />
        <Projetos />
      </main>
      <Contato />
    </>
  );
}
