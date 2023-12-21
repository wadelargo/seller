<template>
    <div>
      <h1>Seller List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="saler in salers" :key="saler.id">
            <td>{{ saler.id }}</td>
            <td>{{ saler.fullname }}</td>
            <td>{{ saler.address }}</td>
            <td>{{ saler.sex }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const salers = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/salers');
      salers.value = response.data;
    } catch (error) {
      console.error('Error fetching salers:', error);
    }
  });

  </script>
  
  <style scoped>
  .product-list {
    margin: 20px;
  }
  
  h1 {
    color: #333;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    background-color: #ccfcc0;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #4ac96ace;
    color: white;
    text-align: center;
  }
  </style>