'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _adminOnRest = require('admin-on-rest');

exports.default = function (type, params) {
    // Se llama cuando el usuario intenta iniciar sesion
    if (type === _adminOnRest.AUTH_LOGIN) {
        var username = params.username;

        localStorage.setItem('username', username);
        //Acepta todas las combinaciones de usuario y contraseña
        return Promise.resolve();
    }

    //llamado cuando el usuario hace click en el boton logout
    if (type === _adminOnRest.AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }

    //llamado cuando el API devuelve un error
    if (type === _adminOnRest.AUTH_ERROR) {
        var status = params.status;

        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    // llamado cuando el usuario navega a una nueva ubicación
    if (type === _adminOnRest.AUTH_CHECK) {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unknown method');
};
//# sourceMappingURL=authClient.js.map