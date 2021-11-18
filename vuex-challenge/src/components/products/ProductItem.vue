<template>
    <li class="product">
        <div class="product__data">
            <div class="product__image">
                <img :src="item.image" :alt="item.title" />
            </div>
            <div class="product__text">
                <h3>{{ item.title }}</h3>
                <base-badge mode="highlight" :no-margin-left="true">
                    <h4>${{ item.price }}</h4>
                </base-badge>
                <p>{{ item.description }}</p>
            </div>
        </div>
        <div class="product__actions">
            <button @click="addItem(item)">Add to Cart</button>
        </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['item'],
    methods: {
        ...mapActions('cart', ['addItem']),
    },
};
</script>

<style scoped>
li {
    margin: 1.5rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}

.product__data {
    display: flex;
}

.product__image {
    margin-right: 1rem;
}

.product__image img {
    height: 10rem;
    width: 10rem;
    object-fit: cover;
}

.product__text h3 {
    margin: 0 0 0.5rem 0;
}

.product__text h4 {
    margin: 0;
}

.product__actions {
    text-align: center;
}

button {
    font: inherit;
    cursor: pointer;
    background-color: #45006d;
    color: white;
    border: 1px solid #45006d;
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
}

button:hover,
button:active {
    background-color: #760ab4;
    border-color: #760ab4;
}
</style>
