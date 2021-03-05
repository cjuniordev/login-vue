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
import authorization from '@/services/authorization';

export default {
  name: 'Home',
  methods: {
    loadAuthorization: async function() {
      const token = window.localStorage.getItem('token');
      const auth = await authorization(token);

      console.log(auth);
    }
  },
  beforeMount(){
    this.loadAuthorization();
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