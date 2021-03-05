import api from './api';

async function authorization(token){
    const btoken = `Bearer ${token}`;
    api.get('/authorization', {
        headers: {
            Authorization: btoken
        }
    })
    .then((response) => {
        return response;
    }).catch((err) => {
        return err;
    })
}

export default authorization;
