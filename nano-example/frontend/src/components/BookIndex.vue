<template>
  <v-container>
    <v-row>
      <v-col class="justify-start" cols="12">
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="256"
          v-for="b in books" :key="b.bookId"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height=100%
            :src=b.cover
          ></v-img>

          <v-card-title><a :href="'/book/'+b.bookId">{{b.title}}</a></v-card-title>

          <v-card-text>
            <div>{{b.author}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';


  export default {
    name: 'BookIndex',

    data: () => ({
      books: [],
    }),
    mounted() {
      axios.get('api/books')
        .then(res => {
            this.books = res.data;
        })
        .catch(err => {
            console.log(err);
        })
    },
  }
</script>
