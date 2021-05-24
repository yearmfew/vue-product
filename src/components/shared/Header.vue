<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link to="/" tag="li" class="navbar-brand" active-class="active">
      Product List
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- product-buy a gitsin. 
           li tagları bunu çevrelesin.
        bu li taglarının sınıfı da nav-item olsun. -->
        <router-link
          to="/product-buy"
          tag="li"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Product Buy</a>
        </router-link>
        <router-link
          to="/product-sell"
          tag="li"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Product Sell</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
</style>