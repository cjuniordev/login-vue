<template>
  <div id="register">
    <form>
      <h1 class="title">
          Registre-se
      </h1>
      <md-field class="input">
          <label>Digite seu usuário</label>
          <md-input v-model="user.username"></md-input>
      </md-field>
      <md-field class="input">
          <label>Digite seu email</label>
          <md-input v-model="user.email" type="email"></md-input>
      </md-field>
      <md-field class="input">
          <label>Digite sua senha</label>
          <md-input v-model="user.password" type="password"></md-input>
      </md-field>
      <md-field class="input">
          <label>Confirme sua senha</label>
          <md-input v-model="user.password2" type="password"></md-input>
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
    }
  },
  methods: {
    handleRegister: async function(){
       const response = await register(this.user);
       if(response.sucess){
         // create modal with response
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

</style>
