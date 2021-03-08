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
import authenticate from '@/services/authenticate';
import getUsers from '@/services/getUsers';
import Table from '@/components/Table';

export default {
  name: 'Home',
  data: function(){
    return{
      users: null,
    }
  },
  components: {
    Table,
  },
  methods: {
    getAuthorization: async function(){
      const token = localStorage.getItem('token');
      await authenticate(token);
      this.redirect();
    },
    redirect: function(){
      if(!this.$store.state.isAuthenticated){
        this.$router.push('/login');
      }
    },
    handleUsers: async function(){
      this.users = await getUsers();
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
