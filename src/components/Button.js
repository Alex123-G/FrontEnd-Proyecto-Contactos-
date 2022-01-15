// Importando Css
import "../styles/agregar.css";
function Button({ children }) {
	return (
		<button className="btn btn-success" style={{ backgroundColor: "#3e2dd3", border: "none" }}>
			{children}
		</button>
	);
}

export default Button;
