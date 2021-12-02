import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/FrontEnd-Proyecto-Contactos-/" element={<App />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
