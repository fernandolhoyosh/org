import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./Form.css";
import Input from "../Input";
import OptionsList from "../OptionsList";
import Button from "../Button";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setpuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");
  

  const {registrarColaborador, crearEquipo} = props

  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log("Manejar el envio")
    let datosEnviar = {
        id: uuid(),
        nombre: nombre,
        puesto: puesto,
        foto: foto,
        equipo: equipo
    }
    registrarColaborador(datosEnviar)
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({ titulo, colorPrimario: color})
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          valor={nombre}
          updateValue={setNombre}
        />
        <Input
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          updateValue={setpuesto}
        />
        <Input
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          updateValue={setFoto}
        />
        <OptionsList
            valor={equipo}
            updateValue={setEquipo}
            equipos={props.equipos}
        />
        <Button>Crear</Button>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Input
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required={true}
          valor={titulo}
          updateValue={setTitulo}
        />
        <Input
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          required
          valor={color}
          updateValue={setColor}
          type="color"
        />
        <Button>Registrar equipo</Button>
        </form>
    </section>
  );
};

export default Form;
