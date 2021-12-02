import { useState } from "react";
import { actualizarContacto } from "../functions/function";
import "../agregar.css";
import Button from "./Button";

function Actualizar({ contactoEditar, setMostrarActualizar }) {
	const [datos_formulario, setDatos_formulario] = useState({
		nombre: `${contactoEditar.nombre}`,
		numero: `${contactoEditar.numero}`,
	});

	const handleChange = e => {
		setDatos_formulario({ ...datos_formulario, [e.target.name]: e.target.value });
	};

	const editar = () => {
		actualizarContacto(contactoEditar.id, datos_formulario.nombre, datos_formulario.numero);
		setMostrarActualizar(false);
	};
	console.log(contactoEditar);

	return (
		<div className="container_form_add">
			<h2>Actualizar Contacto:{contactoEditar.nombre}</h2>
			<div className="form_add">
				<div className="container__input">
					<label htmlFor="nombre">Nombre de Contacto:</label>
					<input id="nombre" name="nombre" onChange={handleChange} value={datos_formulario.nombre} />
				</div>
				<div className="container__input">
					<label htmlFor="numero">Número de celular</label>
					<input id="numero" name="numero" onChange={handleChange} value={datos_formulario.numero} />
				</div>
				<Button onClick={editar}> Actualizar</Button>
			</div>
		</div>
	);
}

export default Actualizar;
