<template>
  <div id="app">
   
    <nav></nav>

    <router-view />
  </div>
</template>
<script>

export default {
  components: {
   
  },
  data() {
    return {
      has_login: false,
    };
  },

  created() {
    this.isLoged();
  },

  methods: {
    isLoged() {
      const has_user = localStorage.getItem("user");
      const has_password = localStorage.getItem("password");
      if (has_user != null && has_password != null) {
        this.has_login = true;
        this.$router.push({ name: "financa" });
      } else {
        this.$router.push({ name: "login" });
      }
    },

   
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
