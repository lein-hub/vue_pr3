Vue.component('ProductDisplay', {
    props:['merch'],
    template:
    `
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
        </div>
    `,
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
                    variantImage: './assets/images/socks_green.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId: 2235, 
                    variantColor: 'blue',
                    variantImage: './assets/images/socks_blue.jpg',
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
});

let app = new Vue({
    el:'#app',
    components:{
        
    },
    data: {
        cart: [],
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
});