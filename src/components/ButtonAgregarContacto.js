const ButtonAgregarContacto = ({
	user,
	setMostrarInsertar,
	mostrarInsertar,
	messageErrorSession,
	mostrarAgregarContacto,
	setMostrarAgregarContacto,
}) => {
	// console.log(user);
	//! Coas a revisar; mirar la carpeta que tenemos en el navegador, el video de mid de la sesion,lo que tendremos que hacer es guardar en el session storage el token o el id que nos pase el auth0 (Revisar que es lo que tenemos que guardar para la sesion) esto hará que al recargar la pagina para actualizar no nos cierre la session y podremos nuevamente agregar,editar o eliminar contactos

	return (
		<button
			className="btn_newContact"
			onClick={() => {
				if (user) {
					setMostrarInsertar(!mostrarInsertar);
					setMostrarAgregarContacto(!mostrarAgregarContacto);
				} else {
					//! Eliminar setMostrarInsertar porque o sino van a poder agregar contactos sin inicar sesion.
					// setMostrarInsertar(!mostrarInsertar);
					// setMostrarAgregarContacto(!mostrarAgregarContacto);
					messageErrorSession();
				}
			}}
		>
			Añadir Contacto
			<img className="img-btn" src={process.env.PUBLIC_URL + "/img/iconContact.svg"} alt="add_contact" />
		</button>
	);
};

export default ButtonAgregarContacto;
