import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        bookData: [],
    },
    mutations:{ //$store.commit()
        updateBookData(state, bookData) {
            state.bookData = bookData;
        }
    },
    actions: { //$store.dispatch()
        getBooks({commit}) {
            axios.get('/api/books')
            .then(res => {
                commit('updateBookData', res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    getters: { //$store.getters
        bookCount(state /*, getters */) {
            return state.bookData.length;
        }
    }
})