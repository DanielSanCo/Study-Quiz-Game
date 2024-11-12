import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState('')

    const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="user" onChange={(e) => {() => textChange(e)}} />
            <input type="text" placeholder="email" onChange={(e) => {() => textChange(e)}} />
            <a href="/"><button onClick={() => alert(`Senha enviada para o e-mail: ${email}`)}>Enviar</button></a>
        </div>
    )
}

export default Register;