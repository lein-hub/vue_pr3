let app = new Vue({
    el:'#root',
    data: {
        message: 'Select a user',
        users: [
            {name:'User'},
            {name:'Admin'},
        ],
    },
    methods: {
        sayHi(name) {
            this.message = 'Hi, ' + name
        }
    },
});