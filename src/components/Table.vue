<template>
  <div id="table">
    <md-table class="table">
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Nome</md-table-head>
        <md-table-head>Email</md-table-head>
      </md-table-row>
      <md-table-row v-for="user in users" v-bind:key="user.id">
        <md-table-cell md-numeric>{{ user.id }}</md-table-cell>
        <md-table-cell>{{ user.username }}</md-table-cell>
        <md-table-cell>{{ user.email }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'Home',
  data: function(){
    return{
      // users: null,
    }
  },
  props: {
    users: Array,
  }
}
</script>

<style>
.table{
  padding: 0 10px;
  background-color: #FFFFFF;
}
</style>
