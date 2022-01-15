import { toast } from "react-toastify";

export const messageSucces = () =>
	toast.success("Contacto Agregado", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const messageWarning = () =>
	toast.warning("Si no puede el contacto agregado, por favor recargue la página.", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

export const messageError = () =>
	toast.error("Ocurrió un error intentelo de nuevo.", {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
export const messageErrorSession = () =>
	toast.error("Para poder hacer esta acción necesita iniciar sesion.", {
		position: "top-right",
		autoClose: 2900,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
