<template>
  <div>
    <div class="d-flex">
      <b-button v-b-toggle.sidebar-footer>Menu</b-button>
    </div>

    <b-sidebar id="sidebar-footer" bg-variant="dark" no-header shadow>
      <div class="mt-5 mb-5">
        <b-button
          variant="primary"
          :to="{ name: 'balanco' }"
          style="width: 100%"
        >
          Balanço / Saldos Totais
        </b-button>
      </div>
      <div class="mt-5 mb-5">
        <b-button
          variant="primary"
          :to="{ name: 'pagamento' }"
          style="width: 100%"
        >
          Pagamentos
        </b-button>
      </div>
      <div class="mt-5 mb-5">
        <b-button
          variant="primary"
          :to="{ name: 'entrada' }"
          style="width: 100%"
        >
          Entradas
        </b-button>
      </div>
      <div class="mt-5 mb-5">
        <b-button
          variant="primary"
          :to="{ name: 'retirada' }"
          style="width: 100%"
        >
          Saídas
        </b-button>
      </div>
      <div class="mt-5 mb-5">
        <b-button
          variant="primary"
          :to="{ name: 'extrato' }"
          style="width: 100%"
        >
          Extrato
        </b-button>
      </div>
      <template #footer="{ hide }">
        <div class="d-flex bg-dark justify-content-between px-3 py-2">
          <b-button size="sm" @click="hide">Close</b-button>
          <b-button variant="primary" size="sm" @click="logout()"
            >Logout</b-button
          >
        </div>
      </template>
      <div class="px-3 py-2"></div>
    </b-sidebar>
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

  name: "Menu",

  methods: {
    logout() {
      const has_user = localStorage.getItem("user");
      const has_password = localStorage.getItem("password");
      if (has_user || has_password) {
        localStorage.removeItem("user");
        localStorage.removeItem("password");
        this.has_login = false;
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<style>
</style>