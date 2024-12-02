import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MiOrg from './components/MiOrg/index.js';
import Team from './components/Team/index.js';
import Footer from './components/Footer/index.jsx';

function App() {

  const [form, setForm] = useState(false)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      favorito: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://cdn2.gnarususercontent.com.br/6/408897/2992a46f-a1cd-4a9c-88eb-bdb61087f9c2.jpg?width=100&height=100&aspect_ratio=1:1",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      favorito: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      favorito: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      favorito: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      favorito: false
    }
  ])

  //Lista equipos
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //Operador Ternario --> condicion ? mostrar : noMostrar

  const mostrarFormulario = () => {
    setForm(!form)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    /* console.log("Nuevo colaborador", colaborador) */
    //spread operator
    setColaboradores([...colaboradores, colaborador])
  }

  //Funcion para eliminar colaborador
  const eliminarColaborador = (id) => {
    /* console.log("eliminar colaborador ", id) */
    const colaboradoresActualizados = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(colaboradoresActualizados)
  }

  //Actualizar color equipos
  const actualizarColorEquipo = (color, id) => {
    /* console.log("Actualizar: ", color, id) */
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    /* console.log(nuevoEquipo) */
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Me gusta
  const like = (id) => {
    /* console.log(id) */
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {
        form && <Form
          equipos = {equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }
      <MiOrg showForm={mostrarFormulario} />
      {
        equipos.map((equipo) => <Team
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColorEquipo = {actualizarColorEquipo}
          like = {like}
          />)
      }
      <Footer />
    </div>
  );
}

export default App;
