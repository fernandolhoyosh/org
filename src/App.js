import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MiOrg from './components/MiOrg/index.js';
import Team from './components/Team/index.js';
import Footer from './Footer/index.jsx';

function App() {

  const [form, setForm] = useState(false)
  const [colaboradores, setColaboradores] = useState([
    {
      equipo:"Programación",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      nombre:"Jose Gonzalez",
      puesto:"Instructor"
    },
    {
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor"
    },
    ])

  //Operador Ternario --> condicion ? mostrar : noMostrar

  const mostrarFormulario = () => {
    setForm(!form)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //spread operator
    setColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos

    const equipos = [
      {
        titulo:"Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        titulo:"Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        titulo:"Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        titulo:"Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        titulo:"UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        titulo:"Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        titulo:"Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ]

  return (
    <div>
      <Header/>
      {
        form && <Form
          equipos = {equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
        />
      }
      <MiOrg showForm={mostrarFormulario} />
      {
        equipos.map((equipo) => <Team
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          />)
      }
      <Footer />
    </div>
  );
}

export default App;
