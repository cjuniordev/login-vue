import api from '@/services/api';
import store from '@/store/index';

async function authenticate(token) {
  try{
    const formattedToken = `Bearer ${token}`;

    const response = await api.get('/authorization', {
      headers: {
        Authorization: formattedToken
      }
    });

    if(response.data.sucess){
      store.commit('authenticate', true);
    } else{
      store.commit('authenticate', false);
    }
  } catch(err){
    console.log(err);
  }
}
export default authenticate;
