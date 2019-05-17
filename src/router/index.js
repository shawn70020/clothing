import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Dashboard1 from '@/components/Dashboard1';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Producttest from '@/components/pages/Producttest';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Customertest from '@/components/pages/Customertest';
import Checkout from '@/components/pages/Checkout';
import Coupons from '@/components/pages/Coupons';
import Try from '@/components/Try';
import Orders from '@/components/pages/Orders';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: 'login',
        },
        // {
        //     name:'helloworld',
        //     path:'/',
        //     component: HelloWorld,
        //     meta: { requiresAuth: true },
        // },
        {
          path: '/login',
          name: 'Login',           
          component: Login,
        },
        {
          path:'/',
          name:'Try',
          component: Try,
        },
        {
          path:'/producttest',
          name:'Producttest',
          component: Producttest,
        },
        {            
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard,
            children: [
                {
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true },
                },
                {
                  path: 'coupons',
                  name: 'Coupons',
                  component: Coupons,
                  meta: { requiresAuth: true },
                },
                {
                  path: 'orders',
                  name: 'Orders',
                  component: Orders,
                  meta: { requiresAuth: true },
                },
                
            ],
        },
        
        {
            path: '/custom',
            name: 'Dashboard1',
            component: Dashboard1,
            children: [
              {
                path: 'customer_order',
                name: 'CustomerOrder',
                component: CustomerOrder,
              },
              {
                path: 'customertest',
                name: 'Customertest',
                component: Customertest,
              },
              {
                path: 'checkout',
                name: 'Checkout',
                component: Checkout,
              },
              {
                path: 'customer_checkout/:orderId',
                name: 'CustomerCheckout',
                component: CustomerCheckout,
              },
            ],
          },
    ],
});