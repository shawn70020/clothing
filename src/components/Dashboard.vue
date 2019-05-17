<template>
  <div>
    
    <Adminnavbar/>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
       <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
    </div>

</template>
<script>
import Sidebar from './Sidebar';
import Adminnavbar from './Adminnavbar';
import Alert from './AlertMessage';
export default {
  components: {
    Sidebar,
    Adminnavbar,
    Alert,
  },
};
</script>

<style>

</style>
