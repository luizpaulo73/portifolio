import './Habilidades.css';
import { listaTecnologia } from './tecnologias';

export default function Habilidades() {

    return(
        <section id='habilidades'>
            <div className="titulo-habilidades">
            <h1>Habilidades</h1>
            </div>
            <div className="tecnologias">
                {listaTecnologia.map((tecnologia) => (
                    <div className="html tecnologia">
                    <p className='p-tecnologia'>{tecnologia.nome}</p>
                    <img src={tecnologia.foto} alt={`${tecnologia.nome} logo`} />
                    </div>
                ))}
                
            </div>
        </section>
    );
};