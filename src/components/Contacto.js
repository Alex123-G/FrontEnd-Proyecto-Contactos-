import "../estilos.css";
import { borrarContacto } from "../functions/function";
import logo from "./contact.png";

function Contacto({ state, showEdit, setRefrescar, refrescar }) {
	const borrar = referesco => {
		borrarContacto(state.id_contactos);
		setRefrescar(!referesco);
	};

	return (
		<div className="contenedor" key={state.id_contactos}>
			<div className="contenedor_info">
				<img alt={state.nombre_contacto} src={logo} />
				<div className="container_info-text">
					<p className="text_name">{state.nombre_contacto}</p>
					<p className="text_number">{state.numero_contacto}</p>
				</div>
			</div>

			<div className="container_button">
				<button
					className="btns"
					onClick={() => {
						showEdit(state.id_contactos, state.nombre_contacto, state.numero_contacto);
					}}
				>
					Actualizar
				</button>
				<button
					className="btns"
					onClick={() => {
						borrar(refrescar, state.id_contactos);
					}}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default Contacto;
