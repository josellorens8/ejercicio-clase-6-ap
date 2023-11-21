import './App.css'
import { Input } from './components/Input'

function App() {

  return (
    <>
      <header>
        <h1>PÁGINA WEB</h1>
      </header>
      <main>
        <h2>REGISTRO</h2>
        <form action="" className='form'>
          <Input etiqueta="nombre" tipo="text" />
          <Input etiqueta="apellido" tipo="text" />
          <Input etiqueta="email" tipo="email" />
          <Input etiqueta="telefono" tipo="text" />
          <Input etiqueta="password" tipo="password" />
          <button type="submit">ENVIAR</button>
        </form>
      </main>
    </>
  )
}

export default App
