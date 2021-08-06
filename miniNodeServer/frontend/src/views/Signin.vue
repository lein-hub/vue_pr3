<template>
  <v-col>
    <h1>Signin</h1>
    <form @submit.prevent="onSubmit(userid, password)">
      <v-text-field v-model="userid" label="User ID" required></v-text-field>

      <v-text-field
        v-model="password"
        :type="'password'"
        label="Password"
        required
      ></v-text-field>

      
        <v-btn color="primary" class="mb-4" type="submit"> SignIn </v-btn>
    </form>
    <input type="button" @click="onClickSignUp" value="I don't have an account" />

    <!-- <form @submit.prevent="onSubmit(userid, password)">
            <input type="text" v-model="userid" placeholder="User ID">
            <input type="password" v-model="password" placeholder="Password">
            <input type="submit" value="Signin">
        </form> -->
    <p>
      <i>{{ message }}</i>
    </p>
  </v-col>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      userid: "",
      password: "",
      message: "",
    };
  },
  methods: {
    onSubmit(userid, password) {
      this.$store
        .dispatch("signin", { userid, password })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          this.message = "Signin Failed.";
        });
    },
    onClickSignUp() {
      this.$router.push("/signup");
    },
  },
};
</script>
