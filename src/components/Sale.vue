<template>
    <div>
      <h1>Sale List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sales Month</th>
            <th>Sales Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" :key="sale.id">
            <td>{{ sale.id }}</td>
            <td>{{ sale.salesmonth }}</td>
            <td>{{ sale.salesquantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const sales = ref([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/sales');
          sales.value = response.data;
        } catch (error) {
          console.error('Error fetching sales:', error);
        }
      });
  
      return {
        sales,
      };
    },
  };
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