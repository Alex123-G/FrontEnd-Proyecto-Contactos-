import axios from "axios";

export const obtenerTodosContactos = async state => {
	const peticion = await axios.get("http://localhost:3001/obtener");
	state(peticion.data);
};

export const insertaNuevoContacto = (nombre, numero) => {
	axios.get(`http://localhost:3001/insertar/${nombre}/${numero}`);
};

export const actualizarContacto = (id, nombre, numero) => {
	axios.get(`http://localhost:3001/actualizar/${id}/${nombre}/${numero}`);
};

export const borrarContacto = id => {
	axios.get(`http://localhost:3001/borrar/${id}`);
};
