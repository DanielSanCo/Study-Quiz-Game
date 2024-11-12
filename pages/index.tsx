import { useState } from "react";


const Login = () => {

  const usuario = [{ nome: 'dansas', password: '3876' }]

  const [username, setUsername] = useState('dansas')
  const [password, setPassword] = useState('3876')

  const MudarUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const MudarSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <div>Username</div>
        <input type="text" placeholder={'Nome de Usuario'} value={username} onChange={(e) => MudarUsername(e)} />
      </div>
      <div>
        <div>Password</div>
        <input type="password" placeholder={'Senha...'} value={password} onChange={(e) => MudarSenha(e)} />
      </div>
      {
        username == usuario[0].nome && password == usuario[0].password ?
          <a href="/materias" style={{ margin: '10px' }}><button>Entrar</button></a>
          :
          <button onClick={() => alert('Dados errados')} style={{ margin: '10px' }}>Entrar</button>
      }
      <div>
        <a href="/register"><button>Registrar</button></a>
      </div>
    </div>
  )
}

export default Login;