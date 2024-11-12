import perfil from '@/utils/perfil';
import styles from './style.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.perfil}>
                <div>Nome: {perfil[0].nome}</div>
                <div>Nivel: {perfil[0].nivel}</div>
                <div>Pontos: {perfil[0].pontos}</div>
                <div>Rank: {perfil[0].rank}</div>
            </div>
            <div className={styles.perfil}>
                <a href="/">
                    <button>Loja</button>
                </a>
            </div>
            <div className={styles.perfil}>
                <a href="/">
                    <button>back</button>
                </a>
            </div>
        </div>
    )
}

export default Header;