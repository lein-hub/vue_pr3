<template>
    <div>
        <h1>{{memo.title}}</h1>
        <img :src="'http://localhost:3000/'+memo.fileUrl" alt="">
        <p>{{memo.content}}</p>

        <v-btn @click="onClickButton" color="error">
        delete
        </v-btn>
    </div>
</template>

<script>
import memoApi from "../apis/memos";

export default {
  name: "ReadMemo",
  data() {
    return {
      memo: {},
    };
  },
  methods: {
      onClickButton() {
        memoApi
        .deleteMemo(this.$route.params.memoId)
        .then(() => {
            this.$router.push('/');
        })
        .catch((err) => {
            console.log(err);
        });
      }
  },
  mounted() {
    memoApi
      .getMemo(this.$route.params.memoId)
      .then((res) => {
        this.memo = res.data;
        console.log(this.memo);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
