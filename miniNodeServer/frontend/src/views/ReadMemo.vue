<template>
    <div>
        <h1>{{memo.title}}</h1>
        <img :src="'http://localhost:3000/'+memo.fileUrl" alt="" v-if="memo.fileUrl">
        <img :src="'http://localhost:3000/resources/noimage.png'" alt="" v-else>
        <p>{{memo.content}}</p>

        <v-btn @click="onClickDelete" class="mb-3" color="error">
        delete
        </v-btn>
        <v-btn @click="onClickEdit" class="mb-3" color="success">
        edit
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
      onClickDelete() {
        memoApi
        .deleteMemo(this.$route.params.memoId)
        .then(() => {
            this.$router.push('/');
        })
        .catch((err) => {
            console.log(err);
        });
      },
      onClickEdit() {
          this.$router.push(`/memos/edit/${this.$route.params.memoId}`)
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
