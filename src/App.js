//Import css
import "./styles/index.css";
// Import Components
import Contacto from "./components/Contacto";
import Insertar from "./components/Insertar";
import Actualizar from "./components/Actualizar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ButtonAgregarContacto from "./components/ButtonAgregarContacto.js";
import Loading from "./components/Loading.js";
// Import Hooks and functions
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import { obtenerTodosContactos } from "./functions/function.js";
import { messageErrorSession } from "./functions/toastFunctions.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const { user } = useAuth0();
	const [state, setState] = useState([]);
	const [contactoEditar, setContactoEditar] = useState({});
	const [mostrarInsertar, setMostrarInsertar] = useState(false);
	const [mostrarAgregarContacto, setMostrarAgregarContacto] = useState(true);
	const [mostrarActualizar, setMostrarActualizar] = useState(false);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		obtenerTodosContactos(setState);
	}, []);

	const showEdit = (id, nombre, numero, photo) => {
		setMostrarActualizar(true);
		setContactoEditar({ id, nombre, numero, photo });
	};

	// console.log(state);

	return (
		<>
			<div className="container_log_btns">
				<Login className="btn btn-primary btn-sm" />
				<Logout className="btn btn-danger btn-sm" />
				<ToastContainer />
			</div>
			<div className="container__title">
				{cargando === false ? <Loading /> : ""}
				<h1>Lista de contactos</h1>
				{mostrarAgregarContacto ? (
					<ButtonAgregarContacto
						user={user}
						setMostrarInsertar={setMostrarInsertar}
						mostrarInsertar={mostrarInsertar}
						messageErrorSession={messageErrorSession}
						mostrarAgregarContacto={mostrarAgregarContacto}
						setMostrarAgregarContacto={setMostrarAgregarContacto}
					></ButtonAgregarContacto>
				) : (
					""
				)}
			</div>
			<div className="padre_contenedor">
				{mostrarInsertar ? (
					<Insertar
						setMostrarInsertar={setMostrarInsertar}
						mostrarInsertar={mostrarInsertar}
						setCargando={setCargando}
						setState={setState}
						mostrarAgregarContacto={mostrarAgregarContacto}
						setMostrarAgregarContacto={setMostrarAgregarContacto}
					></Insertar>
				) : (
					""
				)}
				{mostrarActualizar ? (
					<Actualizar contactoEditar={contactoEditar} setMostrarActualizar={setMostrarActualizar} setCargando={setCargando}></Actualizar>
				) : (
					""
				)}

				{state.length === 0 ? (
					<Loading />
				) : state[0].length === 0 ? (
					<h2 className="text-center">No existen contactos</h2>
				) : (
					state[0].map(e => {
						return <Contacto key={e.id_contactos} state={e} showEdit={showEdit} id={e.id_contactos} setState={setState} setCargando={setCargando} />;
					})
				)}
			</div>
		</>
	);
}

export default App;
