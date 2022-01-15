// Importando Auth0
import { useAuth0 } from "@auth0/auth0-react";

const Logout = ({ className }) => {
	const { logout } = useAuth0();
	return (
		<button className={className} onClick={() => logout()}>
			Cerrar Sesion
		</button>
	);
};

export default Logout;
