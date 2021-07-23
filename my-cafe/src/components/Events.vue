<template>
    <div>
        <h1>Event</h1>
        <h1>{{ event_title }}</h1>
        <h1>{{ searched_event }}</h1>
    </div>
</template>

<script>
export default {
    name:'events',
    props: ['event_id', 'query_id'],
    computed: {
        event_title() {
            if (this.event_id == '1') return '1+1!';
            if (this.event_id == '2') return 'Free cookies';
            return '';
        },
        searched_event() {
            if (this.query_id) return '2+1';
            return '';
        }
    }
}
</script>

<style>

</style>