import "./Team.css"
import Collaborator from "../Collaborator"
import hexToRgba from 'hex-to-rgba'

const Team = (props) => {
    const {id, titulo, colorPrimario} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColorEquipo, like} = props

    const estiloSection = {backgroundColor:hexToRgba(colorPrimario, 0.3)}
    const estiloTitulo = {borderColor:colorPrimario}

    return <>
        { colaboradores.length > 0 &&
        <section className = "equipo" style={estiloSection}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(e) => actualizarColorEquipo(e.target.value, id)}
            />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className = "colaboradores">
            {
                colaboradores.map((colaborador, index) => <Collaborator
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    like = {like}
                />)
            }
        </div>
    </section>
    }
    </>
}

export default Team