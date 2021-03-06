<template>
  <div id="home">
    <aside>
      <div class="perfil">
        <md-avatar>
          <img src="../assets/avatar.png" alt="Avatar">
        </md-avatar>
        <h1>Bem-vindo</h1>
      </div>
      <div class="actions">
        <md-button class="md-raised" @click="handleUsers">Consultar</md-button>
      </div>
    </aside>
    <main >
      <Table v-bind:users="this.users" />
      
    </main>
  </div>
</template>

<script>
import api from '@/services/api';
import Table from '@/components/Table';

export default {
  name: 'Home',
  data: function(){
    return{
      authorization: false,
      users: null,
      data: null,
    }
  },
  components: {
    Table,
  },
  methods: {
    getAuthorization: async function() {
      try{
        const token = window.localStorage.getItem('token');
        const formattedToken = `Bearer ${token}`;
        api.get('/authorization', {
          headers: {
            Authorization: formattedToken
          }
        })
        .then((response) => {
          if(response.data.sucess){
            this.authorization = true;
          } else{
            this.authorization = false;
            this.redirect();
          }
        })
        .catch((err) => {
          console.log(err);
        })
      } catch(err){
          this.authorization = false;
      }
    },
    redirect: function(){
      if(!this.authorization){
        this.$router.push('/login');
      }
    },
    getUsers: function(){
      api.get('/users')
        .then((response) => {
          const { data } = response;
          this.data = data;
        })
    },
    handleUsers: function(){
      this.getAuthorization();
      this.getUsers();
      let arrUsers = [];
      this.data.forEach((item, i) => {
        let user = new Object();
        user.id = item.id;
        user.username = item.username;
        user.email = item.email;
        arrUsers.push(user);
      });
      console.log(arrUsers);
      this.users = arrUsers;
    }
  },
  async beforeMount(){
    this.getAuthorization();
  }
}
</script>

<style>
#home{
  display: flex;
}

aside{
  height: 100vh;
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #F2F2F2;
}

.perfil{
  padding-top : 50px;
}

.actions{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.actions > *{
  margin: 0;
}

main{
  height: 100vh;
  width: 100%;

  background-color: #FAFAFA;
}

.table{
  padding: 0 10px;
  background-color: #FFFFFF;
}
</style>
