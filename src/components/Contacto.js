// Importando Css
import "../styles/estilos.css";
// Imporntando Img
import contact from "../imgs/contact.png";
// Importando Hooks y funciones
import { borrarContacto } from "../functions/function";
import { useAuth0 } from "@auth0/auth0-react";

function Contacto({ state, id, setState, setCargando, setMostrarActualizar, setContactoEditar }) {
	const { user } = useAuth0();

	const showEditForm = (id, nombre, numero, photo) => {
		setMostrarActualizar(true);
		setContactoEditar({ id, nombre, numero, photo });
	};

	const borrar = () => {
		borrarContacto(state.id_contactos, setState, setCargando);
	};

	return (
		<div className="contenedor" key={state.id_contactos}>
			<div className="contenedor_info">
				<img
					alt={state.nombre_contacto}
					src={`http://localhost:3001/${id}.png`}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src = contact;
					}}
					className="perfil_img"
				/>
				<div className="container_info-text">
					<p className="text_name">{state.nombre_contacto}</p>
					<p className="text_number">{state.numero_contacto}</p>
				</div>
			</div>
			<div className="container_button">
				<button
					className="btns"
					onClick={() => {
						if (user) {
							showEditForm(state.id_contactos, state.nombre_contacto, state.numero_contacto, state.photo);
						} else {
							showEditForm(state.id_contactos, state.nombre_contacto, state.numero_contacto);
							//!Eliminar el showEdit si no ha iniciado sesion=> messageErrorSession();
						}
					}}
				>
					Actualizar
					<img src={process.env.PUBLIC_URL + "/img/iconEdit.svg"} alt="edit" />
				</button>
				<button
					className="btns"
					onClick={() => {
						if (user) {
							borrar();
						} else {
							borrar();
							//!Eliminar  borrar si no ha iniciado sesion=> messageErrorSession();
						}
					}}
				>
					Eliminar
					<img src={process.env.PUBLIC_URL + "/img/iconDelete.svg"} alt="delete" />
				</button>
			</div>
		</div>
	);
}

export default Contacto;
