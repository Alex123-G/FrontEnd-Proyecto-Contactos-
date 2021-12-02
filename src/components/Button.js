import "../agregar.css";

function Button({ children, onClick }) {
	return (
		<button className="btn_send" onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
