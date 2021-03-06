import api from '@/services/api';

async function register({ username, email, password, password2 }){
  const isAdmin = false;
  console.log(username, password, password2, email)
  const response = await api.post('/users', { username, password, password2, email, isAdmin });
  return response.data;
}

export default register;
