import Collaborator from "../Collaborator"
import "./Team.css"

const Team = (props) => {
    const {titulo, colorPrimario, colorSecundario} = props.datos
    const {colaboradores} = props

    const estiloSection = {backgroundColor:colorSecundario}
    const estiloTitulo = {borderColor:colorPrimario}

    return <>
        { colaboradores.length > 0 &&
        <section className = "equipo" style={estiloSection}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className = "colaboradores">
            {
                colaboradores.map((colaborador, index) => <Collaborator
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                />)
            }
        </div>
    </section>
    }
    </>
}

export default Team