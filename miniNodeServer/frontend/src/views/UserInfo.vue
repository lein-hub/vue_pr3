<template>
    <v-col>
    <h1>User Info</h1>
    <form @submit.prevent="onSubmit(name)">
      <v-text-field v-model="userId" label="Your ID" disabled></v-text-field>

      <v-text-field v-model="userName" label="Your Name" disabled></v-text-field>

    <v-btn color="error" class="mb-4" type="submit"> Withdraw </v-btn>
    </form>
  </v-col>
</template>

<script>
import sendRequest from '../apis/sendRequest'

export default {
    name: "UserInfo",
    data() {
        return {
            userId: '',
            userName: '',
        }
    },
    methods: {
        onSubmit() {
            sendRequest({
                url: "/api/users/" + localStorage.getItem('userId'),
                method: "delete",
                headers: {
                    'Content-type': localStorage.getItem('token'),
                }
            })
            .then(() => {
                this.$store.commit("signout");
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
    mounted() {
        sendRequest({
            url: "/api/users/" + localStorage.getItem('userId'),
            method: "get",
        })
        .then((res) => {
            this.userId = res.data.userid;
            this.userName = res.data.name;
        })
        .catch((err) => {
            console.log(err);
        })
    },
}
</script>