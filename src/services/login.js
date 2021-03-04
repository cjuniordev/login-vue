import api from './api';

async function login(username, password) {
    const response = await (await api.post('/login', { username, password })).data;
    return response;
}

export default login;