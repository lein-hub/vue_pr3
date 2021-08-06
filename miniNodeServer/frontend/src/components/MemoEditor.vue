<template>
  <div>
    <input type="text" v-model="title" /><br />
    <input type="text" v-model="content" /><br />
    <input type="file" @change="selectFile" ref="file" />
    <button
      @click="onClickButton"
    >
      Save
    </button>
  </div>
</template>

<script>
import memoApi from '../apis/memos'

export default {
  name: "MemoEditor",
  data() {
    return {
      title: "",
      content: "",
      file: "",
      originalFileName: '',
    };
  },
  methods: {
    onClickButton() {
      const data = new FormData();
      data.append("title", this.title);
      data.append("content", this.content);
      data.append("file", this.file);

      memoApi
        .editMemo(this.$route.params.memoId, data)
        .then((res) => {
          console.log(res.status);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/");
        });
    },
    selectFile(e) {
        this.file = e.target.files[0];
        console.log(this.file);
    }
  },
  mounted() {
    memoApi.getMemo(this.$route.params.memoId)
      .then((res) => {
        const memo = res.data;
        this.title = memo.title;
        this.content = memo.content;
      })
      .catch((err) => {
        console.log(err);
      })
  },
};
</script>
