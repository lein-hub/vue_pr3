<template>
  <div class="text-center">
    <h1><span>{{book.title}}</span><span class="grey--text">{{book.subtitle}}</span></h1>
    <v-img class="mx-auto" width=256px :src=book.cover></v-img>
    <h3>작가: {{book.author}}, 번역: <span v-if="book.translator">{{book.translator}},</span> {{book.publisher}}</h3>
    <h4>페이지: {{book.page}}, 가격: {{book.price}}, ISBN: {{book.ISBN}}</h4><br>
    <p>{{book.info}}</p>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'BookDetail',

    data: () => ({
      book: ''
    }),
    mounted() {
      axios.get('/api/books/'+this.$route.params.book_id)
        .then(res => {
          this.book = res.data;
            // const books = res.data;
            // for (let i=0; i<books.length; i++) {
            //   if (books[i].bookId == this.$route.params.book_id) {
            //     this.title = books[i].title;
            //     this.subtitle = books[i].subtitle;
            //     this.cover = books[i].cover;
            //     this.author = books[i].author;
            //     this.translator = books[i].translator;
            //     this.page = books[i].page;
            //     this.price = books[i].price;
            //     this.ISBN = books[i].ISBN;
            //     this.info = books[i].info;
            //     this.publisher = books[i].publisher;
            //     console.log(books[i]);
            //   }
            // }
        })
        .catch(err => {
            console.log(err);
        })
    },
  }
</script>
