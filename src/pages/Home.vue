<template>
  <div id="home">
    <aside>
      <div class="perfil">
        <md-avatar>
          <img src="../assets/avatar.png" alt="Avatar">
        </md-avatar>
        <h1>Bem-vindo, João</h1>
      </div>
      <div class="actions">
        <md-button class="md-raised">Cadastrar</md-button>
        <md-button class="md-raised">Consultar</md-button>
      </div>
    </aside>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'Home',
  data: function (){
    return{
      authorization: false,
    }
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
            this.redirect();
          } else{
            this.authorization = false;
          }
        })
        .catch((err) => {
          return err;
        })
      } catch(err){
          return err;
      }
    },
    redirect: function(){
      if(this.authorization){
        console.log('autorizado');
      } else{
        console.log('nao autorizado');
        this.$router.push('/login');
      }

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
</style>
