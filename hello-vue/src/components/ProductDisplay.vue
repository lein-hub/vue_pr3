<template>
  <div class="product">
      <div class="product-image">
          <img :src="image" alt="blue socks">
      </div>

      <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock<br>remains: {{ inStock }}</p>
          <p v-else>Out of Stock</p>

          <ul>
              <li v-for="(info, i) in details" :key="i">{{ info }}</li>
          </ul>
          <div v-for="(a, i) in variants" :key="a.variantId" class="color-box" :style="{backgroundColor: a.variantColor}" @mouseover="updateProduct(i)">
              <p>{{ a.variantColor }}</p>
          </div>

          <button @click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}">Add to Cart</button>
          
      </div>

      <simple-comment></simple-comment>
  </div>
</template>

<script>
import SimpleComment from './SimpleComment.vue'

export default {
  name: 'ProductDisplay',
  components: {
      SimpleComment
  },
  props: {
    msg: String
  },
  data() {
        return {
            product: 'Socks',
            // img: './assets/images/socks_blue.jpg',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: require('@/assets/images/socks_green.jpg'),
                    variantQuantity: 10,
                },
                {
                    variantId: 2235, 
                    variantColor: 'blue',
                    variantImage: require('@/assets/images/socks_blue.jpg'),
                    variantQuantity: 0,
                },
            ],
            brand: 'Patagonia',
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
    },
    methods: {
        updateProduct(index) {
            this.selectedVariant = index;
        },
        addToCart() {
            this.variants[this.selectedVariant].variantQuantity--;
            this.$emit('add-to-cart', this.variants[this.selectedVariant]);
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
