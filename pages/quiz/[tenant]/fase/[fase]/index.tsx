import questionsTeo from "@/utils/questionsTeo";
import { use, useState } from "react";
import styles from "@/styles/styles.module.css";
import Header from "@/components/Header";
import perfil from "@/utils/perfil";
import { GetServerSideProps } from "next";
import { getTenantResponse, useApi } from "@/libs/useApi";
import questionsMat from "@/utils/questionsMat";

type Quizes = {
    ask: string;
    aA: string;
    aB: string;
    aC: string;
    aD: string;
    right: string;
    dica1: string;
    dica2: string;
    dica3: string;
    dica4: string;
    nivel: number;
}

const Home = (data: Props) => {

    const [right, setRight] = useState('')
    const [points, setPoints] = useState(0)
    const [random, setRandom] = useState(0)
    const [num, setNum] = useState(0)
    const [q, setQ] = useState(1)
    const [somaQuests, setSomaQuests] = useState(1)

    const [quiz, setQuiz] = useState(data.tenant.questions)
    const [asks, setAsks] = useState<Quizes[]>(questionsTeo)

    const PasteRandom = () => {
        // Loop em todos os elementos
        for (let i = questionsTeo.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [questionsTeo[i], questionsTeo[j]] = [questionsTeo[j], questionsTeo[i]];
        }
        // Retornando array com aleatoriedade
        return questionsTeo;
    }

    const SelectQuiz = () => {
        quiz == 'questions-teo' ? setAsks(questionsTeo) : quiz == 'questions-mat' ? setAsks(questionsMat) : ''
    }

    return (
        <>
            <Header />
            <div className={styles.Home}>
                <div>Vidas: 2</div>
                <div>Pt: {points}</div>
                <h1>Fase 1</h1>
                {random == 0 ?
                    <button
                        onClick={() => (PasteRandom(), setRandom(1), SelectQuiz())}
                        style={{ width: '150px', height: '40px', marginTop: '20px', cursor: 'pointer', backgroundColor: 'blue', color: 'white', fontWeight: 'bold' }}
                    >
                        INICIAR
                    </button>
                    : q <= asks.length ?
                    <div>
                        <div style={{ fontWeight: 'bold', margin: '10px' }}>
                            {q}/{asks.length} - Nivel {asks[num].nivel}: {asks[num].ask}
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div
                                onClick={() => 
                                            right == asks[num].right ? 
                                            (setPoints(points + 5),
                                            setSomaQuests(somaQuests + asks[num].nivel),
                                            q == asks.length ?
                                            perfil[0].pontos = somaQuests * 5 : ''
                                            , 
                                            num == asks.length - 1 ? 
                                            '' : 
                                            setNum(num + 1), setQ(q + 1)) :
                                            alert('Errou')
                                        }
                                onMouseMove={() => setRight('A')}
                                style={{ margin: '5px', backgroundColor: 'blue', height: '20px', width: '20px', color: 'white', fontWeight: 'bold', borderRadius: '50%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                A
                            </div>
                            <div style={{ margin: '5px' }}>{asks[num].aA}</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div
                                onClick={() => 
                                            right == asks[num].right ? 
                                            (setPoints(points + 5),
                                            setSomaQuests(somaQuests + asks[num].nivel),
                                            q == asks.length ?
                                            perfil[0].pontos =  somaQuests * 5 : ''
                                            ,  
                                            num == asks.length - 1 ? 
                                            '' : 
                                            setNum(num + 1), setQ(q + 1)) : 
                                            alert('Errou')
                                        }
                                onMouseMove={() => setRight('B')}
                                style={{ margin: '5px', backgroundColor: 'blue', height: '20px', width: '20px', color: 'white', fontWeight: 'bold', borderRadius: '50%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                B
                            </div>
                            <div style={{ margin: '5px' }}>{asks[num].aB}</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div
                                onClick={() => 
                                            right == asks[num].right ? 
                                            (setPoints(points + 5),
                                            setSomaQuests(somaQuests + asks[num].nivel),
                                            q == asks.length ?
                                            perfil[0].pontos = somaQuests * 5 : ''
                                            ,   
                                            num == asks.length - 1 ? 
                                            '' : 
                                            setNum(num + 1), setQ(q + 1)) : 
                                            alert('Errou')
                                        }
                                onMouseMove={() => setRight('C')}
                                style={{ margin: '5px', backgroundColor: 'blue', height: '20px', width: '20px', color: 'white', fontWeight: 'bold', borderRadius: '50%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                C
                            </div>
                            <div style={{ margin: '5px' }}>{asks[num].aC}</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div
                                onClick={() => 
                                            right == asks[num].right ? 
                                            (setPoints(points + 5),
                                            setSomaQuests(somaQuests + asks[num].nivel),
                                            q == asks.length ?
                                            perfil[0].pontos =  somaQuests * 5 : ''
                                            ,  
                                            num == asks.length - 1 ? 
                                            '' : 
                                            setNum(num + 1), setQ(q + 1)) : 
                                            alert('Errou')
                                        }
                                onMouseMove={() => setRight('D')}
                                style={{ margin: '5px', backgroundColor: 'blue', height: '20px', width: '20px', color: 'white', fontWeight: 'bold', borderRadius: '50%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                D
                            </div>
                            <div style={{ margin: '5px' }}>{asks[num].aD}</div>
                        </div>
                        <div>
                            <div onClick={() => alert(asks[num].dica1)}>Dica 1</div>
                            <div>{asks[0].dica2}</div>
                            <div>{asks[0].dica3}</div>
                            <div>{asks[0].dica4}</div>
                        </div>
                    </div>
                    :
                    <button
                        onClick={() => (setRandom(0))}
                        style={{ width: '150px', height: '40px', marginTop: '20px', cursor: 'pointer', backgroundColor: 'blue', color: 'white', fontWeight: 'bold' }}
                    >
                        FIM
                    </button>
                }
            </div>
        </>
    )
}

export default Home;

type Props = {
    tenant: getTenantResponse
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { tenant: tenantSlug } = context.query;
    const api = useApi()

    const tenant = await api.getTenant(tenantSlug as string);
    if(!tenant) {
        return { redirect: {destination: '/', permanent: false}}
    }

    return {
        props: {
            tenant
        }
    }
}