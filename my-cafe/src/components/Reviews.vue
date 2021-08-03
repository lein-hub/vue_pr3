<template>
    <div>
        <h1>Review</h1>
        <ul>
            <li v-for="c in comments" :key='c.id'>
                <p>{{c.body}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'reviews',
    data() {
        return {
            comments: [],
        }
    },
    mounted() {
        axios.get('api/comments')
        .then(res => {
            console.log(res);
            this.comments = res.data;
        })
        .catch(err => {
            console.log(err);
        })

        // async function getComments() {
        //     try {
        //         res = axios.get('https://jsonplaceholder.typicode.com/comments');
        //         console.log(res);
        //         this.comments = res.data;
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    },
}
</script>

<style>

</style>