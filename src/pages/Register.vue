<template>
  <div id="register">
    <form>
      <h1 class="title">
          Registre-se
      </h1>
      <md-field class="input" :class="messageClass">
          <label>Digite seu usuário</label>
          <md-input v-model="user.username" required></md-input>
      </md-field>
      <md-field class="input" :class="messageClass">
          <label>Digite seu email</label>
          <md-input v-model="user.email" type="email" required></md-input>
      </md-field>
      <md-field class="input" :class="messageClass">
          <label>Digite sua senha</label>
          <md-input v-model="user.password" type="password" required></md-input>
      </md-field>
      <md-field class="input" :class="messageClass">
          <label>Confirme sua senha</label>
          <md-input v-model="user.password2" type="password" required></md-input>
      </md-field>
      <md-button
          class="md-raised button"
          type="button"
          @click="handleRegister"
      >
      Cadastrar
      </md-button>
      <div class="links">
          <p>
              Possui uma conta?
              <router-link to="/login" class="bold">Entre</router-link>
          </p>
      </div>
    </form>
    <md-snackbar class="snackbar" :md-position="center" :md-duration="4000" :md-active.sync="showSnackbar" md-persistent>
      <span class="bold">
        <font-awesome-icon icon="exclamation-circle" />
        Não foi possível registrar usuário!
      </span>
      <md-button class="md-primary bold" @click="showSnackbar = false">OK</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import register from '@/services/register';

export default {
  name: 'Register',
  data: function(){
    return{
      user: {
        username: null,
        password: null,
        password2: null,
        email: null
      },
      showSnackbar: false,
    }
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': true
      }
    }
  },
  methods: {
    handleRegister: async function(){
      if(!this.isNull(this.user)){
        const response = await register(this.user);
        if(response.sucess == true){
          this.$router.replace('/login');
        } else{
          this.showSnackbar = true;
        }
      } else{
        this.showSnackbar = true;
      }
    },
    isNull: function(obj){
      if(obj.username && obj.password && obj.password2 && obj.email){
        console.log('nao nulos')
        return false;
      } else{
        return true;
      }
    }
  }
}
</script>

<style>
#register{
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #FAFAFA;
}

form{
    height: 60vh;
    width: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 10px;
    border-radius: 10px;

    background-color: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, .2);
}

.input{
    width: 90%;

    margin-bottom: 0;
}

.button{
    width: 100%;

    border-radius: 20px !important;

    margin-top: 30px;

    background: rgb(103,196,249);
    background: linear-gradient(90deg, rgba(103,196,249,1) 25%, rgba(163,60,240,1) 75%);
}

.links{
    width: 100%;
    padding-top: 20px;
}

.bold{
    font-weight: bold;
}

p{
    margin: 0;
}

.snackbar{
  background-color: #FF6155;
  color: #FFFF;
}

.md-primary{
  color: #FFFF;
}

</style>
