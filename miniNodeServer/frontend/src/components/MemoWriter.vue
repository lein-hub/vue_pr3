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
  name: "MemoWriter",
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
        .addMemo(data)
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
};
</script>
