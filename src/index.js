import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			{/* <Route path="/actualizar/:id" element={<Actualizar />} /> */}
			{/* <Route path="/agregar" element={<Insertar />} /> */}
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
