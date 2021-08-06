<template>
  <v-container>
    <h1>Your Memos</h1>
    <v-row>
      <v-card class="my-12 mx-auto" max-width="344" v-for="m in memos" :key="m.memoid">
        <v-img
          :src="'http://localhost:3000/'+m.fileUrl"
          height="200px" v-if="m.fileUrl"
        ></v-img>
        <v-img
          src="http://localhost:3000/resources/noimage.png"
          height="200px" v-else
        ></v-img>

        <v-card-title> <a :href="'/memos/'+m.memoid">{{ m.title }}</a> </v-card-title>

        <v-card-subtitle> {{ m.content }} </v-card-subtitle>
      </v-card>
    </v-row>
    
  </v-container>
</template>

<script>
import memoApi from "../apis/memos";

export default {
  name: "Home",
  data() {
    return {
      memos: [],
    };
  },
  mounted() {
    memoApi
      .getMemos()
      .then((res) => {
        this.memos = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
