<template>
  <div>
    <Menu />
    <h2>Balanço</h2>
    <div class="d-flex justify-content-center p-3 m-3">
      <b-card
        style="width: 20rem"
        bg-variant="primary"
        text-variant="white"
        class="text-center me-2"
      >
        <h2>Depósitos</h2>
        <h3>Valor R$: {{ depositos }}</h3>
        <h3>Qtd de Depósitos: {{ qtd_depositos }}</h3>
      </b-card>
      <b-card
        style="width: 20rem"
        bg-variant="danger"
        text-variant="white"
        class="text-center ms-2"
      >
        <h2>Retiradas</h2>
        <h3>Valor R$: {{ saques }}</h3>
        <h3>Qtd de Saques: {{ qtd_saques }}</h3>
      </b-card>
    </div>
    <div class="d-flex justify-content-center">
      <b-card
        style="width: 20rem"
        bg-variant="success"
        text-variant="white"
        class="text-center me-2"
      >
        <h2>Total Disponivel</h2>
        <h3>R$: {{ disponivel }}</h3>
      </b-card>
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
      disponivel: localStorage.getItem("disponivel") || "0",

      // depositos: localStorage.getItem('acumuladorDep') || "0",
      // qtd_depositos: localStorage.getItem("qtdDepositos") || "0",
      // saques: localStorage.getItem("acumulador_ret") || "0",
      // qtd_saques: localStorage.getItem("qtdSaque") || "0",

      depositos: "",
      qtd_depositos: "",
      saques: "",
      qtd_saques: "",
    };
  },

  mounted() {
    this.isLoged();
    this.has_depositos();
    this.has_qdtDepositos();
    this.has_saques();
    this.has_qdtSaques();
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

    has_depositos() {
      //acumulador_dep
      let data = localStorage.getItem("acumuladorDep");
      if (data) {
        this.depositos = data;
        console.log(this.depositos);
      }
    },

    has_qdtDepositos() {
      let data = localStorage.getItem("qtdDepositos");
      if (data) {
        this.qtd_depositos = data;
        console.log(this.qtd_depositos);
      }
    },
    has_saques() {
      //acumulador_ret
      let data = localStorage.getItem("acumulador_ret");
      if (data) {
        this.saques = data;
        console.log(this.saques);
      }
    },
    has_qdtSaques() {
      let data = localStorage.getItem("qtdSaque");
      if (data) {
        this.qtd_saques = data;
        console.log(this.qtd_saques);
      }
    },
  },
};
</script>

<style>
</style>