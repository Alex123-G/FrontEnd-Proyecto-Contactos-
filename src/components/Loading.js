// Importando Cs
import "../styles/loading.css";

const Loading = () => {
	return (
		<div className="align-items-center m-auto d-flex justify-content-center container_styles">
			<p className="m-3">Cargando </p>
			<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Loading;
