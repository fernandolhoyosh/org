import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MiOrg from './components/MiOrg/index.js';

function App() {

  const [form, setForm] = useState(true)

  //Operador Ternario --> condicion ? mostrar : noMostrar

  const mostrarFormulario = () => {
    setForm(!form)
  }

  return (
    <div>
      <Header/>
      {form && <Form />}
      <MiOrg showForm={mostrarFormulario} />
    </div>
  );
}

export default App;
