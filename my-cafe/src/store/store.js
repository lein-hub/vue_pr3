import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        userId: 'user',
        reviews: [],
    },
    mutations:{ //$store.commit()
        updateUserId(state, newId) {
            state.userId = newId;
        },
        updateReviews(state, reviews) {
            state.reviews = reviews;
        }
    },
    actions: { //$store.dispatch()
        getReviews({commit}) {
            axios.get('/api/comments')
            .then(res => {
                commit('updateReviews', res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    getters: { //$store.getters
        reviewCount(state /*, getters */) {
            return state.reviews.length;
        }
    }
})