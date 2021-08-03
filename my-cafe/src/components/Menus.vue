<template>
    <div>
        <h1>Menu</h1>
        <ol>
            <li v-for="(menu, i) in menus" :key="i"><a :href="'/menus/'+menu.id">{{menu.name}}</a></li>
        </ol>
    </div>
</template>

<script>
export default {
    name:'menus',
    data() {
        return {
            menus: [
                {id: 1, name: '아이스 아메리카노', price: 1000},
                {id: 2, name: '카페라떼', price: 1500}
            ]
        }
    },
}
</script>

<style>

</style>