import config from 'config';
import { authHeader, authHeaderPutPost, handleResponse } from '@/_helpers';

export const userService = {
    getAll,
    updateUser,
    updateProfile,
    updateNaughty,
    getUserById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/users/getall`, requestOptions).then(handleResponse);
}

function updateUser(user) {
    
    const requestOptions = {
        method: 'PUT',
        headers: authHeaderPutPost(),
        body: JSON.stringify(user.data),
    };
    
    return fetch(`${config.apiUrl}/api/Users/updateuser/` + user.data.id, requestOptions)
        .then(handleResponse);
}

function updateProfile(user) {
    
    const requestOptions = {
        method: 'PUT',
        headers: authHeaderPutPost(),
        body: JSON.stringify(user.data),
    };
   
    return fetch(`${config.apiUrl}/api/Users/updateprofile/` + user.data.id, requestOptions)
        .then(handleResponse);
}

function updateNaughty(user) {
    
    const requestOptions = {
        method: 'PUT',
        headers: authHeaderPutPost(),
        body: JSON.stringify(user),
    };
   
    return fetch(`${config.apiUrl}/api/Users/updateuser/` + user.id, requestOptions)
        .then(handleResponse);
}

function getUserById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/users/getuser/` + id, requestOptions).then(handleResponse);
}