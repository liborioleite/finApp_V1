<template>
  <div>
    <Menu />
    <h3>Disponivel R$: {{ this.disponivel }}</h3>
    <div style="display: -webkit-inline-box">
      <b-card
        style="width: 20rem"
        bg-variant="primary"
        text-variant="white"
        class="text-center"
      >
        <label for="txt_disponivel">Valor</label>
        <b-form-input
          v-model="valor_deposito"
          type="number"
          id="txt_disponivel"
          required
        ></b-form-input>
        <b-button class="mt-2" variant="secondary" @click="depositar()"
          >Depositar</b-button
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
      disponivel: null,
      valor_atual: 0,
      valor_deposito: "",
      entradas: [],
      entrada: {
        dia: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
        valor: 0,
      },
    };
  },

  mounted() {
    this.isLoged();
    this.has_disponivel();
    this.has_entradas();
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

    depositar() {
      if (this.valor_deposito < 0) {
        alert("Valor Inválido");
      } else {
        //Realizamdo o calculo do valor em disponivel e salvando no localstorage
        this.disponivel += Number(this.valor_atual + this.valor_deposito);
        localStorage.setItem("disponivel", this.disponivel);
        /**Declarando a variavel data_entrada para receber diretamente o valor iserido no input
         * pois eu não consegui pegar dinamicamente e nem com o operador spred.
         */
        this.entrada.valor = this.valor_deposito;
        //preenchendo o obejto entrada com os valores e inserindo entrada dentro do array entradas.
        let new_entradas = { ...this.entrada };
        this.entradas.push(new_entradas);
        localStorage.setItem("entradas", JSON.stringify(this.entradas));
        this.valor_deposito = "";
      }
    },

    has_disponivel() {
      let data_disponivel = Number(localStorage.getItem("disponivel"));
      this.disponivel = Number(data_disponivel);
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