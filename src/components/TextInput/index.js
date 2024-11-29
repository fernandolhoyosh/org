import "./TextInput.css"

const TextInput = (props) => {

    const {titulo, placeholder, required, valor, updateValue} = props;

    const manejarCambio = (e) => {
        updateValue(e.target.value)
    }

    return <div className="campo-texto">
        <label>{titulo}</label>
        <input placeholder={placeholder} required={required} value={valor} onChange={manejarCambio} />
    </div>
}

export default TextInput