import axios from "axios";

export const obtenerTodosContactos = async state => {
	const peticion = await axios.get("https://backend-proyecto-contactos.herokuapp.com/obtener");
	state(peticion.data);
};

export const insertaNuevoContacto = (nombre, numero) => {
	axios.get(`https://backend-proyecto-contactos.herokuapp.com/insertar/${nombre}/${numero}`);
};

export const actualizarContacto = (id, nombre, numero) => {
	axios.get(`https://backend-proyecto-contactos.herokuapp.com/actualizar/${id}/${nombre}/${numero}`);
};

export const borrarContacto = id => {
	axios.get(`https://backend-proyecto-contactos.herokuapp.com/borrar/${id}`);
};
