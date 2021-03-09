import api from '@/services/api';

async function register({ username, password, password2, email }){
  try{
    const isAdmin = false;
    const response = await api.post('/users', { username, password, password2, email, isAdmin });

    return response.data;

  } catch(err){
    console.log(err);
  }
}

export default register;
