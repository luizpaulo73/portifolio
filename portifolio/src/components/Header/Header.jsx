import styles from './Header.module.css';

export default function Header() {

    return (
        <header className={styles.cabecalho}>
            <nav className={styles.navegacao}>
                <ul>
                    <li><a href="#sobre-mim" className={styles.links}>Sobre</a></li>
                    <li><a href="#habilidades" className={styles.links}>Habilidades</a></li>
                    <li><a href="#meus-projetos" className={styles.links}>Projetos</a></li>
                    <li><a href="#contato" className={styles.links}>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}
