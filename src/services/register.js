import api from '@/services/api';

async function register({ username, password, password2, email }){
  try{
    const isAdmin = false;
    const response = await api.post('/users', { username, password, password2, email, isAdmin });

    return response.data;

  } catch(err){
    const response = JSON.parse('{ "sucess": "false" }');
    console.log(err);

    return response;
  }
}

export default register;
