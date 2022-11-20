<template>
  <div>
    <Menu />
    <h3>Disponivel R$: {{ this.disponivel }}</h3>
    <div style="display: -webkit-inline-box">
      <b-card
        style="width: 20rem"
        bg-variant="danger"
        text-variant="white"
        class="text-center"
      >
        <label for="txt_disponivel">Valor</label>
        <b-form-input
          v-model="valor_retirado"
          type="number"
          id="txt_disponivel"
          required
        ></b-form-input>
        <b-button class="mt-2" variant="warning" @click="retirar()"
          >Retirar</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import { set } from "vue";
import Menu from "../components/Menu.vue";
export default {
  components: {
    Menu,
  },

  data() {
    return {
      qtd_saque: 0,
      disponivel: null,
      valor_atual: "",
      valor_retirado: "",
      acumulador_ret: 0,
      retiradas: [],
      retirada: {
        dia: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
        valor: "",
      },
    };
  },

  mounted() {
    this.isLoged();
    this.has_disponivel();
    this.has_retiradas();
    this.has_saques();
    this.has_qdtSaques();
  },
  methods: {
    isLoged() {
      const has_user = localStorage.getItem("user");
      const has_password = localStorage.getItem("password");
      if (has_user != null && has_password != null) {
      } else {
        this.$router.push({ name: "login" });
      }
    },

    retirar() {
      if (this.valor_retirado < 0 || this.valor_retirado > this.disponivel) {
        alert("Valor Inválido");
      } else {
        this.disponivel = Number(this.disponivel - this.valor_retirado);
        localStorage.setItem("disponivel", this.disponivel);

        localStorage.setItem("valorretirado", this.valor_retirado);
        this.retirada.valor = this.valor_retirado;
        let data_retiradas = { ...this.retirada };
        this.retiradas.push(data_retiradas);
        localStorage.setItem("retiradas", JSON.stringify(this.retiradas));

        this.acumulador_ret =
          Number(this.acumulador_ret) + Number(this.valor_retirado);
        this.qtd_saque++;
        localStorage.setItem("qtdSaque", this.qtd_saque);
        localStorage.setItem("acumulador_ret", this.acumulador_ret);

        this.valor_retirado = "";

        // para aqui
      }
    },

    has_disponivel() {
      this.disponivel = localStorage.getItem("disponivel");
    },

    has_retiradas() {
      let data_retiradas = JSON.parse(localStorage.getItem("retiradas"));
      if (data_retiradas) {
        this.retiradas = data_retiradas;
      } else {
        this.retiradas = [];
      }
    },
    has_saques() {
      //acumulador_ret
      let data = localStorage.getItem("acumulador_ret");
      if (data) {
        this.acumulador_ret = data;
        console.log(this.acumulador_ret);
      }
    },
    has_qdtSaques() {
      let data = localStorage.getItem("qtdSaque");
      if (data) {
        this.qtd_saque = data;
        console.log(this.qtd_saque);
      }
    },
  },
};
</script>

<style>
</style>