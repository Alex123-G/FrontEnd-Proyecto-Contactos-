import axios from "axios";
import { messageError } from "./toastFunctions";
//todo CAMBIAR LA RUTA DE LA BUSQUEDA DE LA API POR LOCALHOST PARA PROBARLO ANTES DE SUBIRLO, CAMBIAR LA URL POR LA DEL LOCALHSOT.
//todo  https://backend-proyecto-contactos.herokuapp.com/obtener

//! Primero hacr que cuando presionemos el boton de "Añadi contacto de color verde " desaparezca ese boton le colocamos display none Y despues de agregar un usuario desaparecemos el formulaio de agregar usuario y le cambiamos a display block.

//! Cambiar el formato de las imagenes guardadas a jpg mas livianas que png.

//! Depsues de ver si se agrego correctamente a la bd el registro en la bd vamos a cambiar un state a true y esto le va lanzar una alerta(	toast.error("Contacto Creado si no lo puede visualizar, porfa vor recarge la página", { timeout: "1100" })) ; y Despues de que acabe el tiempo le decimos que cambie nuevamente el estate a null, y esto se harai aya que si quer agrgar otro usuairo lo volvemos ac cambiar elestado para que aparesca el mensaje y uevamnte le cambiamos el estado por si desea agregar otro usuario.

//! Agegar un modal que aparesca que esta cargando mientras se este haciendo el proceso de eliminar actualizar o editar, y este va ser un compoment que va aparecer en la pantalla principal y el fondo va estar transparente. hay un vide de midve de login que aparece un nook o una forma de poder colocar un div fuera del arbol del deiv Pero en verdad si esta dentro del arbol.

export const obtenerTodosContactos = state => {
	axios
		.get("https://backend-proyecto-contactos.herokuapp.com/obtener")
		.then(function (response) {
			state(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const insertaNuevoContacto = (nombre, numero, data_photos, setCargando, state) => {
	const form_data = new FormData();
	form_data.append("nombre", nombre);
	form_data.append("numero", numero);
	form_data.append("image", data_photos);
	// Colocamos que este en true  y antes del axios ke decimos que nos ponga en false que es cuando nos va mostrar el de agregando; y en el then que es despues del llamada y el cumplimiento de la api, vamos a cambiarle el estado a true que es para que desapresca
	setCargando(true);
	axios
		.post(`https://backend-proyecto-contactos.herokuapp.com/insertar`, form_data)
		.then(function (response) {
			setCargando(false);
			state(response.data);
			// console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
			messageError();
		});
};

export const actualizarContacto = (id, nombre, numero, data_photos, setCargando) => {
	const form_data = new FormData();
	form_data.append("nombre", nombre);
	form_data.append("numero", numero);
	if (data_photos === null) {
		// Si data_photos es igual a null, es decir no ha recibido nada NO va hacer nada
	} else {
		// Si data obtubo un Objeto tipo File lo que va hacer es guardarlo en un FormData
		form_data.append("image", data_photos);
	}

	//* Para poder ver clave valor de nuestro Form Data
	//* for (var pair of form_data.entries()) {
	//* console.log(pair[0] + ", " + pair[1]);
	//* }

	setCargando(true);
	axios
		.put(`https://backend-proyecto-contactos.herokuapp.com/actualizar/${id}`, form_data)
		.then(function (response) {
			setCargando(false);
			window.location.href = "https://alex123-g.github.io/FrontEnd-Proyecto-Contactos-";
		})
		.catch(function (error) {
			messageError();
			console.log(error);
		});
};

export const borrarContacto = (id, setState, setCargando) => {
	setCargando(true);

	axios
		.delete(`https://backend-proyecto-contactos.herokuapp.com/borrar/${id}`)
		.then(function (response) {
			setState(response.data);
			setCargando(false);
		})
		.catch(function (error) {
			console.log(error);
		});
};
