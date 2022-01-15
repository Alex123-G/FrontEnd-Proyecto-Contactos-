// Importando css
import "../styles/agregar.css";
// Importando Componentes
import Button from "./Button";
// Importando Hooks y funciones
import { useState, useEffect } from "react";
import { actualizarContacto } from "../functions/function";

function Actualizar({ contactoEditar, setMostrarActualizar, setCargando }) {
	const [datos_formulario, setDatos_formulario] = useState({
		nombre: `${contactoEditar.nombre}`,
		numero: `${contactoEditar.numero}`,
		photo: null,
	});

	useEffect(() => {
		setDatos_formulario({
			nombre: `${contactoEditar.nombre}`,
			numero: `${contactoEditar.numero}`,
			photo: null,
		});
	}, [contactoEditar]);

	const handleChange = e => {
		if (e.target.files) {
			setDatos_formulario({ ...datos_formulario, photo: e.target.files[0] });
		} else {
			const value = e.target.value.trim();
			setDatos_formulario({ ...datos_formulario, [e.target.name]: value });
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		actualizarContacto(contactoEditar.id, datos_formulario.nombre, datos_formulario.numero, datos_formulario.photo, setCargando);
		setMostrarActualizar(false);
	};

	return (
		<div className="container_form_add">
			<div className="exit_btn">
				<img
					src={process.env.PUBLIC_URL + "/img/iconDelete.svg"}
					alt="close"
					onClick={() => {
						setMostrarActualizar(false);
					}}
				/>
			</div>
			<form className="form_add" onSubmit={handleSubmit}>
				<div className="mb-3 mt-3">
					<input
						className="form-control"
						id="nombre"
						name="nombre"
						onChange={handleChange}
						placeholder="Ingrese el nombre de Contacto"
						value={datos_formulario.nombre}
					/>
				</div>
				<div className="mb-3 mt-3">
					<input
						className="form-control"
						id="numero"
						name="numero"
						onChange={handleChange}
						placeholder="Ingrese el número del contacto"
						value={datos_formulario.numero}
					/>
				</div>
				<div className="mb-3 mt-3">
					<input type="file" accept="image/*" id="photo" className="form-control" name="photo" onChange={handleChange} />
				</div>
				<Button>Actualizar</Button>
			</form>
		</div>
	);
}

export default Actualizar;
