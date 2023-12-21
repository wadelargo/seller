<template>
  <div class="product-list">
    <h1>Product List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Brand Name</th>
          <th>Item Price</th>
          <th>Item Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.itemname }}</td>
          <td>{{ product.brandname }}</td>
          <td>{{ product.itemprice }}</td>
          <td>{{ product.itemstock }}</td>
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
    const products = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    });

    return {
      products,
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

table[data-v-7402d09b] {
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
