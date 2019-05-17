<template>
  <div>
    
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div style="height: 290px; background-size: cover; background-position: center"
            :style="{backgroundImage: `url(${item.imageUrl})`}">
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtoCart(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{num}} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary"
              @click="addtoCart(product.id, product.num)">
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="cart">
            <div class="cart-icon" @click.prevent="openBox = !openBox">
                <i class="fas fa-cart-plus"></i>
            </div>
            <span id="cart-total" class="bg-danger">{{cartTotal}}</span>
            <div class="cart-box" v-show="openBox">
               
                <div class="row justify-content-center bg-light py-3 rounded dark-border">
                <div class="col-md-12">
                    <h5 class="text-dark"> <b>購物車清單</b></h5> 
                    <span><i class="fas fa-spinner fa-spin"></i></span>
                    <table class="table my-0">
                    <tbody>
                        <tr v-for="item in cart.carts" :key="item.id">
                        <td class="align-middle">
                            <button type="button" class="btn bg-transparent btn-sm" @click="removeCart(item.id)">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </td>
                        <td class="align-middle text-dark">{{item.product.title}}</td>
                        <td class="align-middle" v-if="item.product.price">{{item.product.price * item.qty}}元</td>
                        <td class="align-middle" v-if="!item.product.origin_price">{{item.product.price * item.qty}}元</td>
                        </tr>
                    </tbody>
                    </table>
                    <a v-if="cartTotal == 0" href="#" class="d-block btn btn-sm bg-danger text-light">購物車還空的！</a>
                    <router-link v-else to="/custom/customertest" class="d-block btn btn-sm bg-success text-light">結帳去</router-link>
                </div>
                </div>
            </div>
            </div>
    <div class="footer">
    <p class="mt-5 mb-3 text-muted">&copy; CLOTHING-2019</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      products: [],
      openBox: false,
      cart: {},
      cartTotal: 0,
      product: {},
      status: {
        loadingItem: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
     
      coupon_code: '',
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        console.log(response);
      
      });
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        $('#productModal').modal('show');
        console.log(response);
        vm.status.loadingItem = '';
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
        vm.status.loadingItem = '';
        vm.getCart();
        $('#productModal').modal('hide');
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
 
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        console.log(response);
     
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      
      this.$http.delete(url).then(() => {
        vm.getCart();
        
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
   
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
      
      });
    },
     getCart() {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        this.$http.get(api).then((response) => {
          this.cart = response.data.data;
          this.cartTotal = this.cart.carts.length;
        })
      },
      removeCart(id) {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      
        this.$http.delete(api).then((response) => {
          this.getCart();
   
        });
      },
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
     
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
            // vm.getCart();
           
          });
        } else {
          console.log('欄位不完整');
        }
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
    this.$bus.$on('emitGetCart', this.getCart);
  },
};
</script>

<style scoped>
  .cart {
    position: fixed;
    bottom: 60px;
    right: 50px;
    z-index: 200;
  }
  .dark-border {
    border: 1px solid #313233
  }
  .cart-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    background-color: transparent; 
  }
  .cart-icon:hover {
    opacity: .8;
  }
  .cart-icon:focus {
    outline: none;
  }
  .cart-icon i {
    font-size: 3rem;
  }
  .cart #cart-total {
    position: absolute;
    bottom: 33px;
    right: -10px;
    color: #fff;
    border: 1px solid #ef5d5d;
    border-radius: 50%;
    padding: 3px 9px;
  } 
  .cart-box {
    position: relative;
    bottom: 50px;
    right: 83px;
  }
  .table td {
    padding: .3rem;
  }

  .footer{
    text-align: center;
  }
</style>