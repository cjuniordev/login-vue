<template>
  <form id="form-login">
    <h1 class="title">
        Bem-Vindo
    </h1>
    <div class="highlight-text">
        <h2>
            Empresa SA
        </h2>
    </div>
    <md-field class="input">
        <label>Digite seu usuário</label>
        <md-input v-model="initial"></md-input>
    </md-field>
    <md-field class="input">
        <label>Digite sua senha</label>
        <md-input v-model="password" type="password"></md-input>
    </md-field>  
    <md-button
        class="md-raised button"
        type="button"
        v-on:click="handleLogin(initial, password)"
    >
    Entrar
    </md-button>
    <div class="links">
        <router-link to="/help">Esqueci minha senha</router-link>
        <p>
            Não possui uma conta?
            <router-link to="/register" class="bold">Cadastre-se</router-link>
        </p>
    </div>
  </form>
</template>

<script>
import login from '@/services/login';

export default {
name: 'FormLogin',
methods: {  
    handleLogin: async function(name, pwd) {
        const response = await login(name, pwd);
        if(response.sucess){
            window.localStorage.setItem('token', response.token);
            this.$router.push('/');
        }
    }
}
}
</script>

<style>

form{
    height: 60vh;
    width: 40vh;

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

    display: flex;
    flex-direction: column;
    align-items: center;
}

.highlight-text{
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #2c3e50;
}

.highlight-text > * {
    margin: 0;
    color: #ffff;
}

.bold{
    font-weight: bold;
}

p{
    margin: 0;
}

</style>