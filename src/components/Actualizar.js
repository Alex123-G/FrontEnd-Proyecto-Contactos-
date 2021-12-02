import { useState } from "react";
import { actualizarContacto } from "../functions/function";
import "../agregar.css";
import Button from "./Button";

function Actualizar({ contactoEditar, setMostrarActualizar }) {
	/**
	 ** De esta forma obtenemos los parametros que estan en las urls ,y este valor en este caso el id lo podemos usar para mostar el contenido que hemos seleccionado(NO es parte de este ejemplo) (Esto es un ejemplo de ReactRouter v6)
	 ** const { id } = useParams();
	 ** console.log(id);
	 */
	const [datos_formulario, setDatos_formulario] = useState({
		//Aca lo que estamos haciendo es que el valor por defecto de nombre y numero sea "contactoEditar" el cual contiene los datos del contacto que hemos seleccionado, lo que hacemos es que el valor al aparecer el componente sea el del estado "datos_formulario" osea este estado entocnes cada vez que aparezca el render vamos a ver este valor al princiio despues se puede cambiar con la funcion que se ejcuta en el "onChange"
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
			<h2>Actualizar Contacto:{contactoEditar.id}</h2>
			<div className="form_add">
				<div className="container__input">
					<label htmlFor="nombre">Nombre de Contacto:</label>
					<input id="nombre" name="nombre" onChange={handleChange} value={datos_formulario.nombre} />
				</div>
				<div className="container__input">
					<label htmlFor="numero">Número de celular</label>
					{/* Aqui el value le indicamos que sea el del estado y el primer valor del estado en este caso es el de la persona que vamos actualizar ya que le hemos pasado los datos del contactoa este Componente */}
					<input id="numero" name="numero" onChange={handleChange} value={datos_formulario.numero} />
				</div>
				{/* <button className="btn_send" onClick={editar}></button> */}
				<Button onClick={editar}> Actualizar</Button>
			</div>
		</div>
	);
}

export default Actualizar;
