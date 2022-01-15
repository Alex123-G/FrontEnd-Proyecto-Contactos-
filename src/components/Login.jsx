// Importando Auth0
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({ className }) => {
	const { loginWithRedirect } = useAuth0();

	return (
		<button className={className} onClick={() => loginWithRedirect()}>
			Iniciar Sesion
		</button>
	);
};

export default Login;
