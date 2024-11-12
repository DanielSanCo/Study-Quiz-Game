import Header from '@/components/Header';
import styles from './styles.module.css'

const mats = [
    { nome: 'Matemática', link: 'quiz/questions-mat/fase' },
    { nome: 'Teologia', link: 'quiz/questions-teo/fase' }
]

const materias = () => {
    return (
        <>
            <Header />
            <div className={styles.body}>
                {mats.map((item, index) => (
                    <a href={item.link}>
                        <div className={styles.eachMat} key={index}>
                            <div>{item.nome}</div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default materias;