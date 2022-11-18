<template>
  <div>
    <Menu />
    <h3>Criar Pagamento</h3>
    <br />
    <div style="display: -webkit-inline-box">
      <b-button v-b-modal.modal-1>Adicionar</b-button>

      <b-modal ok-title="Salvar" id="modal-1" title="Ordem de Pagamento">
        <!-- <b-button @click="hideModal">Close Me</b-button>
        <b-button @click="toggleModal">Toggle Me</b-button> -->
        <b-list-group style="width: 29rem">
          <b-form-input
            class="mb-2"
            type="text"
            placeholder="Descrição"
            required
          ></b-form-input>
        </b-list-group>
        <b-list-group style="width: 29rem">
          <b-form-input type="text" placeholder="Valor" required></b-form-input>
        </b-list-group>
      </b-modal>
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
    return {};
  },

  mounted() {
    this.isLoged();
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
    hideModal() {
      console.log("fechei o modal");
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnHide");
    },
    toggleModal() {
      
      
    },
  },
};
</script>

<style>
</style>