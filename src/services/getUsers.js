import api from '@/services/api';

async function getUsers(){
  try{
    const { data } = await api.get('/users');

    let users = [];
    data.forEach((item, i) => {
      let user = new Object();
      user.id = item.id;
      user.username = item.username;
      user.email = item.email;
      users.push(user);
    });

    return users;
  } catch(err){
    console.log(err);
  }
}

export default getUsers;
