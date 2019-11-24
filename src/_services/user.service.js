import config from 'config';
import { authHeader, authHeaderPutPost, handleResponse } from '@/_helpers';

export const userService = {
    getAll,
    updateUser
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/users/getall`, requestOptions).then(handleResponse);
}

function updateUser(user) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeaderPutPost(),
        body: JSON.stringify(user),
    };
    return fetch(`${config.apiUrl}/api/Users/updateuser/` + user.id, requestOptions)
        .then(handleResponse);
}
