<template>
  <div>
    <Menu />
    <h3>Criar Pagamento</h3>
    <br />
    <div>
      <!-- <b-modal id="meu-modal">
        <template v-slot:modal-header="{ close }">
          <b-button @click="close()"> Fechar Modal </b-button>
          <h5>Cabeçalho do Modal</h5>
        </template>
        <p>Aqui está o conteudo do modal</p>
        <template v-slot:modal-footer="{ hide, ok }">
          <p>Rodapé personalizado</p>
          <b-button @click="hide()">Fechar</b-button>
          <b-button @click="ok()">Proximo</b-button>
        </template>
      </b-modal> -->

      <b-button v-b-modal.meu-modal>Adicionar</b-button>

      <b-modal ok-title="Salvar" id="meu-modal" title="Ordem de Pagamento">
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

        <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
          >Close Me</b-button
        >
        <b-button
          class="mt-2"
          variant="outline-warning"
          block
          @click="toggleModal"
          >Toggle Me</b-button
        >

        <!-- <template v-slot:modal-footer="{ cancelar, toggleModal }"> -->
        <!-- <b-button @click="cancelar()">Cancelar</b-button>
        <b-button @click="toggleModal()">Salvar</b-button> -->
        <!-- </template> -->
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

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    // hideModal() {},
    // toggleModal() {
    //   this.$root.$emit("bv::hide::modal", "modal-1", "#btnHide");
    //   console.log("fechei o modal");
    // },
  },
};
</script>

<style>
</style>