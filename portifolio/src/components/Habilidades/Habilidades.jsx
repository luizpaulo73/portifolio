import styles from './Habilidades.module.css';
import { listaTecnologia } from './tecnologias';

export default function Habilidades() {

    return(
        <section className={styles.habilidades} id="habilidades">
            <div className={styles.tituloHabilidades}>
                <h1>Tecnologias</h1>
            </div>
            <div className={styles.tecnologias}>
                {listaTecnologia.map((tecnologia, index) => (
                    <div key={index} className={styles.tecnologia}>
                        <p className={styles.pTecnologia}>{tecnologia.nome}</p>
                        <img src={tecnologia.foto} alt={`${tecnologia.nome} logo`} />
                    </div>
                ))}
            </div>
        </section>
    );
}
