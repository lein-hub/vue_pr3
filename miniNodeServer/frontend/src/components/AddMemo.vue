<template>
  <div>
    <input type="text" v-model="title" /><br />
    <input type="text" v-model="content" /><br />
    <input type="file" @change="selectFile" ref="file" /><button
      @click="addMemo"
    >
      Save
    </button>
  </div>
</template>

<script>
import memoApi from "../apis/memos";

export default {
  name: "AddMemo",
  data() {
    return {
      title: "",
      content: "",
      file: "",
      originalFileName: '',
    };
  },
  methods: {
    addMemo() {
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
  },
};
</script>
