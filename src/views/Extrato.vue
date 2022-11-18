<template>
  <div>
    <div>
      <Menu />
      <h3>Relatório de Retidadas</h3>
      <div>
        <b-table striped hover :items="retiradas"></b-table>
      </div>
    </div>
    <div class="mt-5">
      <h3>Relatório de Entradas</h3>
      <div>
        <b-table striped hover :items="entradas"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  components: {
    Menu,
  },

  data() {
    return {
      retiradas: [],
      entradas: [],
    };
  },

  mounted() {
    this.isLoged();
    this.has_retiradas();
    this.has_entradas();
  },
  methods: {
    isLoged() {
      const has_user = localStorage.getItem("user");
      const has_password = localStorage.getItem("password");
      if (has_user != null && has_password != null) {
        this.has_login = true;
      } else {
        this.$router.push({ name: "login" });
      }
    },

    has_retiradas() {
      let data_retiradas = JSON.parse(localStorage.getItem("retiradas"));
      if (data_retiradas) {
        this.retiradas = data_retiradas;
      } else {
        this.retiradas = [];
      }
    },

    has_entradas() {
      let data_entradas = JSON.parse(localStorage.getItem("entradas"));
      if (data_entradas) {
        this.entradas = data_entradas;
      } else {
        this.entradas = [];
      }
    },
  },
};
</script>

<style>
</style>