<template>
    <div>
        <h1>Welcome {{userId}}</h1>
        <input v-model="newId" type="text"><button @click="updateUserId">Save</button>
        <button @click="updateReviews">Update</button>
        <h3>리뷰갯수: {{reviewCount}}개</h3>
        <ul>
            <li v-for="r in reviews" :key="r.id">
                <p>{{r.body}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name:'home',
    data() {
        return {
            newId:''
        }
    },
    computed: {
        // namespaced 가 설정되지 않은 경우
        ...mapState({
            userId: state=>state.user.userId
        }),
        // namespaced 가 설정된 경우 (모듈명을 적는다)
        ...mapState('reviews', {
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews', ['reviewCount'])
    },
    methods: {
        ...mapMutations(['updateUserId']),
        ...mapActions('reviews', ['getReviews']),
        updateUserId() {
            // this.$store.commit('updateUserId', this.newId);
            this.updateUserId(this.newId);
        },
        updateReviews() {
            // this.$store.dispatch('reviews/getReviews');
            this.getReviews();
        }
    },
}
</script>

<style>

</style>