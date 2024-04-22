<template>
    <div>
      <h1>Tablas en la Base de Datos</h1>
      <ul>
        <li v-for="table in tables" :key="table.name">{{ table.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tables: []
      };
    },
    created() {
      this.fetchTables();
    },
    methods: {
      fetchTables() {
        axios.get('http://localhost:3000/api/tables')
          .then(response => {
            this.tables = response.data.map(table => {
              const tableNameKey = Object.keys(table)[0]; 
              return { name: table[tableNameKey] };
            });
          })
          .catch(error => {
            console.error('Error fetching tables:', error);
          });
      }
    }
  }
  </script>
  