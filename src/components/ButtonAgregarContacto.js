const ButtonAgregarContacto = ({
	user,
	setMostrarInsertar,
	mostrarInsertar,
	messageErrorSession,
	mostrarAgregarContacto,
	setMostrarAgregarContacto,
}) => {
	return (
		<button
			className="btn_newContact"
			onClick={() => {
				if (user) {
					setMostrarInsertar(!mostrarInsertar);
					setMostrarAgregarContacto(!mostrarAgregarContacto);
				} else {
					//! Eliminar setMostrarInsertar porque o sino van a poder agregar contactos sin inicar sesion.
					setMostrarInsertar(!mostrarInsertar);
					setMostrarAgregarContacto(!mostrarAgregarContacto);
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
