<template>
    <div>
        <h1>Menu Info</h1>
        <h1>{{ menu_name }}</h1>
        <h1>{{ searched_menu }}</h1>
    </div>
</template>

<script>
export default {
    name:'menus',
    computed: {
        menu_name() {
            const id = this.$route.params.menu_id;
            if (id == '1') return '차가운 아메리카노 입니다.';
            if (id == '2') return '뜨뜻한 카페라떼';
            return '';
        },
        searched_menu() {
            const id = this.$route.query.menu_id;
            if (id == '1') return '아이스 아메리카노';
            if (id == '2') return '카페라떼';
            return '';
        }
    }
}
</script>

<style>

</style>