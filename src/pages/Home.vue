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
        <md-button to="/register" class="md-raised">Cadastrar</md-button>
        <md-button class="md-raised">Consultar</md-button>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Home',
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