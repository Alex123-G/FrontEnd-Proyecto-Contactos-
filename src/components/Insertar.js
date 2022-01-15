// Imporntado Css
import "../styles/index.css";
import "../styles/agregar.css";
// Importando Components
import Button from "./Button";
// Importando Hooks y funciones
import { useState } from "react";
import { insertaNuevoContacto } from "../functions/function";
// Importando Expresiones regulares
import { regExp_validacion_nombre, regExp_validacion_numero } from "../dictionary";

const Insertar = ({ mostrarInsertar, setMostrarInsertar, setCargando, setState, mostrarAgregarContacto, setMostrarAgregarContacto }) => {
	const [datos_formulario, setDatos_formulario] = useState({
		nombre: "",
		numero: 0,
		photo: "",
	});

	const handleChange = e => {
		//! El tipo de tamaño que maneja son de bytes que son menor a 1 Kilobyte o kilobytes.
		if (e.target.files) {
			setDatos_formulario({ ...datos_formulario, photo: e.target.files[0] });
		} else {
			const value = e.target.value.trim();
			setDatos_formulario({ ...datos_formulario, [e.target.name]: value });
		}

		if (!regExp_validacion_nombre.test(datos_formulario.nombre) && e.target.name === "nombre") {
			e.target.classList.add("is-invalid");
		} else if (e.target.name === "nombre") {
			e.target.classList.remove("is-invalid");
			e.target.classList.add("is-valid");
		} else if (!regExp_validacion_numero.test(datos_formulario.numero) && e.target.name === "numero") {
			e.target.classList.add("is-invalid");
		} else if (e.target.name === "numero") {
			e.target.classList.remove("is-invalid");
			e.target.classList.add("is-valid");
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		insertaNuevoContacto(datos_formulario.nombre, datos_formulario.numero, datos_formulario.photo, setCargando, setState);
		// Para que desaparesca el formulario
		setMostrarInsertar(false);
		// Para que desaparesca o apareca el boton de Agregar Contacto de color verde
		setMostrarAgregarContacto(!mostrarAgregarContacto);
	};

	return (
		<div className="container_form_add">
			<div className="exit_btn">
				<img
					src={process.env.PUBLIC_URL + "/img/iconDelete.svg"}
					alt="close"
					onClick={() => {
						setMostrarAgregarContacto(!mostrarAgregarContacto);
						setMostrarInsertar(!mostrarInsertar);
					}}
				/>
			</div>
			<form className="form_add" onSubmit={handleSubmit}>
				<div className="mb-3 mt-3">
					<input
						id="nombre"
						name="nombre"
						className="form-control"
						placeholder="Ingrese el nombre de Contacto"
						onChange={handleChange}
						aria-describedby="validation_nombre"
						required
					/>
					<div id="validation_nnombre" className="invalid-feedback">
						Ingresar un nombre válido
					</div>
				</div>
				<div className="mb-3 mt-3">
					<input
						id="numero"
						name="numero"
						placeholder="Ingrese el número del contacto"
						className="form-control"
						onChange={handleChange}
						aria-describedby="validation_number"
						required
					/>
					<div id="validation_nnombre" className="invalid-feedback">
						Ingresar un número válido
					</div>
				</div>
				<div className="mb-3 mt-3">
					<input type="file" accept="image/*" id="photo" className="form-control" name="photo" onChange={handleChange} required />
				</div>
				<Button>Agregar</Button>
			</form>
		</div>
	);
};

export default Insertar;
