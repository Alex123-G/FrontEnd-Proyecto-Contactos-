//Constante y claves para la sesio de Usuario(Auth 0)
export const name_domain = process.env.REACT_APP_NAME_DOMAIN;
export const client_id = process.env.REACT_APP_CLIENT_ID;
export const redirectUri = process.env.REACT_APP_REDIRECTURI;

export const regExp_validacion_nombre = /^[A-Za-z0-9]{3,40}$/;
export const regExp_validacion_numero = /^[0-9]{7,10}$/;
