import { createRouter, createWebHistory } from 'vue-router';
import Seller from '../components/Seller.vue';
import Product from '../components/Product.vue';
import Sale from '../components/Sale.vue';  


const routes = [
  {
    path: '/sellers',
    name: 'Seller',
    component: Seller,
  },
  {
    path: '/products',
    name: 'Product',
    component: Product,
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Sale,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
