import { useState } from "react";
import "./Form.css";
import TextInput from "../TextInput";
import OptionsList from "../OptionsList";
import Button from "../Button";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setpuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const {registrarColaborador} = props

  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log("Manejar el envio")
    let datosEnviar = {
        nombre: nombre,
        puesto: puesto,
        foto: foto,
        equipo: equipo
    }
    registrarColaborador(datosEnviar)
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextInput
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          valor={nombre}
          updateValue={setNombre}
        />
        <TextInput
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          updateValue={setpuesto}
        />
        <TextInput
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
    </section>
  );
};

export default Form;
