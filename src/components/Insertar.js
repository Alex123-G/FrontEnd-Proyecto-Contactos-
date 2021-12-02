import { useState } from "react";
import { insertaNuevoContacto } from "../functions/function";
import "../index.css";
import "../agregar.css";
import Button from "./Button";
const Insertar = ({ setMostrarInsertar }) => {
	const [datos_formulario, setDatos_formulario] = useState({
		nombre: "",
		numero: 0,
	});

	const handleChange = e => {
		setDatos_formulario({ ...datos_formulario, [e.target.name]: e.target.value });
	};

	const insertar = () => {
		insertaNuevoContacto(datos_formulario.nombre, datos_formulario.numero);
		setMostrarInsertar(false);
	};

	// console.log(datos_formulario);
	return (
		<div className="container_form_add">
			<h2>Agregar Contacto</h2>
			<div className="form_add">
				<div className="container__input">
					<label htmlFor="nombre">Nombre de Contacto:</label>
					<input id="nombre" name="nombre" onChange={handleChange} />
				</div>
				<div className="container__input">
					<label htmlFor="numero">Número de celular:</label>
					<input id="numero" name="numero" onChange={handleChange} />
				</div>
				<Button onClick={insertar}>Agregar</Button>
			</div>
		</div>
	);
};

export default Insertar;
