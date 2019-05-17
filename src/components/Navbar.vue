<template>
  <div class="top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">CLOTHING</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <router-link to="/custom/customer_order" class="nav-link">
        HOME</router-link>
      
      <router-link to="/login" class="nav-link">
            ADMIN
          </router-link>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
      
  
    </ul>
  </div>
</nav>
    
 <header>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active" style="background-image: url('https://i.ibb.co/d0p7tbc/bruno-nascimento-113628-unsplash-1.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">STYLE</h2>
          <p class="lead">This is a description for the first slide.</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('https://i.ibb.co/1GKCnwS/cam-morin-655384-unsplash-1.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">CHILL</h2>
          <p class="lead">This is a description for the second slide.</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('https://i.ibb.co/g4456wg/dwayne-legrand-1160067-unsplash.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">OUTFIT</h2>
          <p class="lead">This is a description for the third slide.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>
</header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.APIPATH}/logout`;
      this.$http.post(url).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/signin");
        }
      });
    }
  }
};
</script>
<style>


.content {
  display: flex;
  height: 300px;
  align-items: flex-start;
}
.content p {
  font-family: "DFKai-SB";
  font-size: 25px;
}
h2{
  font-family: "SimSun";
}
.recommend {
  width: 400px;
  height: 200px;
  margin: auto;
  overflow: hidden;
  margin-top: 85px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 18px 20px;
}
.recommend h2 {
  font-size: 32px;
  text-align: center;
}
.recommend p {
  text-align: center;
  padding-top: 10px;
}

.car {
  display: block;
  padding-left: 630px;
}

.carousel-item {
  height: 76vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
