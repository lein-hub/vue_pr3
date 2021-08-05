<template>
  <div>
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

      <input type="submit" value="Signup" />
    </form>
    <v-btn color="success" class="mr-4" @click="onClickSignIn"> SignIn </v-btn>
    <p>
      <i>{{ message }}</i>
    </p>
  </div>
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
