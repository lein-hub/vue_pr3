<template>
<div>
  <div class="nav-bar"></div>
  <div id="app">
    <product-display @add-to-cart="addToCart" merch="socks.getVueSocks()"></product-display>
    <product-display @add-to-cart="addToCart"></product-display>
    <div class="cart">
        <p>Cart {{ cartCount }}</p>
        <ul>
            <li v-for="(c, i) in cart" :key="i">{{ c.productId }}: {{ c.quantity }}</li>
        </ul>
    </div>
  </div>
</div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue'

export default {
  name: 'App',
  components: {
    ProductDisplay
  },
  data() {
      return {
        cart: [],
      }
  },
  computed: {
      cartCount() {
          let count = 0;
          this.cart.forEach(element => {
              count += element.quantity;
          });
          return count;
      }
  },
  methods: {
      addToCart(v) {
          for (let i=0; i<this.cart.length; i++) {
              if (this.cart[i].productId === v.variantId) {
                  return this.cart[i].quantity++;
              }
          }

          let temp = {
              productId: v.variantId,
              quantity: 1,
          }
          return this.cart.push(temp);
      },
  },
}
</script>

<style>
@import './assets/styles.css';
</style>
