import "./Input.css";

const Input = (props) => {
  const { titulo, placeholder, required, valor, updateValue, type = "text" } = props;

  const manejarCambio = (e) => {
    updateValue(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{titulo}</label>
      <input
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Input;
