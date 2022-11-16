<template>
 <div>
  <Menu/>
    <h1>Página do Saldo Total</h1>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
 components: {
   Menu
  },

  mounted() {
    this.isLoged()
   
  },
  methods: {
      isLoged() {
      const has_user = localStorage.getItem("user");
      const has_password = localStorage.getItem("password");
      if (has_user != null && has_password != null) {
        // this.has_login = true;
      //  alert("Logado!");
      } else {
        // alert("Não está Logado")
        this.$router.push({ name: "login" });
      }
    },

  }
}
</script>

<style>

</style>