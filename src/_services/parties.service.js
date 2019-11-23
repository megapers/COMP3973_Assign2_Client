import { authenticationService } from '@/_services';
import { authHeader, handleResponse } from '@/_helpers';
import config from 'config';

export const partyService = {
    getAllParties
};

function getAllParties() {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Parties/GetAllParties`, requestOptions)
        .then(handleResponse);
}