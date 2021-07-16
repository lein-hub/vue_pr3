Vue.component('comm', {
    props: ['name'],
    template:
    `
    <div>
        <form @submit.prevent="onSubmitForm">
        <input v-model="creator"><br>
        <textarea v-model="message"></textarea>
        <button>저장</button>
        </form>
        <ul v-for="(a, i) in comments">
            <li>
                <div>{{ comments[comments.length - 1 - i].creator }}</div>
                <div>{{ comments[comments.length - 1 - i].message }}</div>
            </li>
            <br>
        </ul>
    </div>
    `
    ,
    data() {
        return {
            comments: [],
            message: '',
            creator: '',
        }
    },
    computed: {
        
    },
    methods: {
        onSubmitForm() {
            const comment = {
                creator: this.creator,
                message: this.message,
            };
            this.comments.push(comment);
            this.message = '';
            this.creator = '';
        }
    },
});


let app = new Vue({
    el:'#root',
    components:{
        
    },
    data: {
        
    },
    computed: {
        
    },
    methods: {
        
    },
});