import { useEffect, useState } from "react";
import Contacto from "./components/Contacto";
import { obtenerTodosContactos } from "./functions/function.js";
import Insertar from "./components/Insertar";
import Actualizar from "./components/Actualizar";
import "./index.css";

function App() {
	const [refrescar, setRefrescar] = useState(false);
	const [state, setState] = useState([]);
	const [mostrarInsertar, setMostrarInsertar] = useState(false);
	const [mostrarActualizar, setMostrarActualizar] = useState(false);
	const [contactoEditar, setContactoEditar] = useState({});

	useEffect(() => {
		obtenerTodosContactos(setState);
	}, [refrescar, mostrarInsertar, mostrarActualizar]);

	const showEdit = (id, nombre, numero) => {
		setMostrarActualizar(!mostrarActualizar);
		setContactoEditar({ id, nombre, numero });
	};

	return (
		<>
			<div className="title_page">
				<h1>Lista de contactos</h1>
				<button
					className="btn_newContact"
					onClick={() => {
						setMostrarInsertar(!mostrarInsertar);
					}}
				>
					Nuevo contacto
				</button>
			</div>
			<div className="padre_contenedor">
				{mostrarInsertar ? <Insertar setMostrarInsertar={setMostrarInsertar}></Insertar> : ""}
				{mostrarActualizar ? (
					<Actualizar contactoEditar={contactoEditar} setMostrarActualizar={setMostrarActualizar}></Actualizar>
				) : (
					""
				)}

				{state
					? state.map(e => {
							return (
								<Contacto
									showEdit={showEdit}
									state={e}
									key={e.id_contactos}
									setRefrescar={setRefrescar}
									refrescar={refrescar}
								/>
							);
					  })
					: `No existen contactos`}
			</div>
		</>
	);
}

export default App;
