<template>
  <div>
    <b-container class="d-flex justify-content-center container text-center">
      <b-card class="b-card">
        <b-card-title>Login</b-card-title>
        <b-form-input
          v-model="user"
          placeholder="Usuário"
          maxlength="50"
        ></b-form-input>
        <b-form-input
          v-model="password"
          type="password"
          placeholder="Senha"
          maxlength="15"
          class="mt-2"
        ></b-form-input>
        <b-button class="mt-3" @click="login()">Sing in</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
      has_login: false,
    };
  },

  methods: {
    login() {
      if (this.user == "" || this.password == "") {
        alert("Usuário ou senha Inválidos!");
      }

      if (this.user != "financeiro" || this.password != "financeiro2022") {
        alert("Usuário ou senha Inválidos!");
      } else {
        localStorage.setItem("user", this.user);
        localStorage.setItem("password", this.password);
        this.has_login = true;
        this.$router.push({ name: "financa" });
      }
    },
  },
};
</script>

<style>
.container {
  height: 100vh;
  align-items: center;
}
.b-card {
  width: 30%;
  height: 300px;
  padding-top: 4rem;
}
</style>