<template>
  <div id="register">
    <h1>Registrar</h1>
    <form class="md-layout">
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="name">Nome</label>
            <md-input name="name" id="name" v-model="user.username"/>
            </md-field>
          <md-field>
            <label for="email">E-mail</label>
            <md-input type="email" name="email" id="email" v-model="user.email"/>
          </md-field>
          <md-field>
            <label for="password">Senha</label>
            <md-input type="password" name="password" id="password"  v-model="user.password"/>
          </md-field>
          <md-field>
            <label for="conf_password">Cofirmar senha</label>
              <md-input type="password" name="conf_password" id="conf_password" v-model="user.password2"/>
            </md-field>
          <md-button type="button" class="md-primary" :disabled="sending" @click="handleRegister">Registrar</md-button>
        </div>
      </div>
      <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
        <span>Connection timeout. Showing limited messages!</span>
      </md-snackbar>
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
        email: null,
        password: null,
        password2: null
      },
      showSnackbar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false
    }
  },
  methods: {
    handleRegister: async function(){
       const res = await register(this.user);
       if(res.sucess){
         console.log('user registered')
       }
       this.showSnackbar= true;
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

  background-color: #FAFAFA;
}
form{
  width: 30%;
  padding: 0 30px;
  background-color: #FFFFFF;
}
.md-primary{
  background-color: #40c057;
}
</style>
