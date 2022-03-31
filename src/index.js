import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { name_domain, client_id, redirectUri, identifier } from "./dictionary";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
	<Auth0Provider
		domain={name_domain}
		clientId={client_id}
		redirectUri={redirectUri}
		audience={identifier}
		scope="read:current_user update:current_user_metadata"
		cacheLocation="localstorage"
	>
		<BrowserRouter>
			<Routes>
				<Route path="/FrontEnd-Proyecto-Contactos-/" element={<App />} />
			</Routes>
		</BrowserRouter>
	</Auth0Provider>,
	document.getElementById("root")
);
