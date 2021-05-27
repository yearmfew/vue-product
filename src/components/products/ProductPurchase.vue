<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              v-model="product.title"
              type="text"
              class="form-control"
              placeholder="Ürün adını giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              v-model="product.count"
              type="number"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              v-model="product.price"
              type="number"
              class="form-control"
              placeholder="Ürün fiyatı giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              v-model="product.description"
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button
            class="btn btn-primary"
            :disabled="saveEnabled"
            @click="saveProduct"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
      saveButtonClicked: false,
    };
  },
  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveProduct", this.product);
    },
  },
  computed: {
    // Controls if form elements are written. Then makes disabled false.
    saveEnabled() {
      let result = true;
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.description.length > 0
      ) {
        result = false;
      }
      return result;
    },

    isLoading() {
      if (this.saveButtonClicked) {
        return { display: "block" };
      } else {
        return { display: "none" };
      }
    },
  },
  // prevent to get out pages without saving. Warns the user about unsaved changes.
  // This is a default computed. There are three parameters. We are using now next.
  // next decides if user can go to the next page according to its parameter.
  beforeRouteLeave(to, from, next) {
    if (
      (this.product.title.length > 0 ||
        this.product.count > 0 ||
        this.product.price > 0 ||
        this.product.description.length > 0) &&
      !this.saveButtonClicked
    ) {
      if (confirm("There are unsaved changes. Do You want to get out...")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>
<style scoped>
</style>