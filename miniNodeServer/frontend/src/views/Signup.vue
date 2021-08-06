<template>
  <v-col>
    <h1>Signup</h1>
    <form @submit.prevent="onSubmit(userid, name, password)">
      <v-text-field v-model="userid" label="User ID" required></v-text-field>

      <v-text-field v-model="name" label="Name" required></v-text-field>

      <v-text-field
        v-model="password"
        :type="'password'"
        label="Password"
        required
      ></v-text-field>

    <v-btn color="primary" class="mb-4" type="submit"> SignUp </v-btn>
    </form>
    <input type="button" @click="onClickSignIn" value="I already have an account!" />
    <p>
      <i>{{ message }}</i>
    </p>
  </v-col>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      userid: "",
      password: "",
      name: "",
      message: "",
    };
  },
  methods: {
    onSubmit(userid, name, password) {
      this.$store
        .dispatch("signup", { userid, name, password })
        .then(() => {
          this.$router.push("/signin");
        })
        .catch(() => {
          this.message = "Signup Failed.";
        });
    },
    onClickSignIn() {
      this.$router.push("/signin");
    },
  },
};
</script>
