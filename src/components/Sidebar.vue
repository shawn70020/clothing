<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div id="app">
      <div class="sidebar-sticky">
        <br>
        <br>
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span class=" bg-light text-dark h2">管理員</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6><br>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">
              <i class="fas fa-list-ol"></i>&nbsp;產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link">
              <i class="far fa-list-alt"></i>&nbsp;訂單列表
            </router-link>
          </li>
          <li class="nav-item text-danger">
            <router-link to="/admin/coupons" class="nav-link">
              <i class="fas fa-ticket-alt"></i>&nbsp;優惠券
            </router-link>
          </li>
        </ul>
        
          
       
      </div>
    
    </div>
  </nav>
</template>


<script>
export default {
  name: "App",
  data() {
      return {
        isActive: 1,
      }
    },
    methods: {
      toCategoryPage(category, n) {
        this.isActive = n;
        this.$bus.$emit('category-search', category);
      }
    },
};
</script>