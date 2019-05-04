import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK} from 'admin-on-rest';

export default (type, params) => {
     // Se llama cuando el usuario intenta iniciar sesion
    if(type === AUTH_LOGIN){
        const { username } = params;
        localStorage.setItem('username', username);
           //Acepta todas las combinaciones de usuario y contraseña
        return Promise.resolve();
    }

    //llamado cuando el usuario hace click en el boton logout
    if(type === AUTH_LOGOUT){
        localStorage.removeItem('username');
        return Promise.resolve();
    }

    //llamado cuando el API devuelve un error
    if( type === AUTH_ERROR){
        const {status} = params;
        if (status === 401 || status === 403){
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    // llamado cuando el usuario navega a una nueva ubicación
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unknown method');

};