import "./MiOrg.css"

const MiOrg = (props) => {
    const {showForm} = props
    //Estado - Hooks
    //UseState
/*     const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }
 */
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={showForm} />
    </section>
}

export default MiOrg