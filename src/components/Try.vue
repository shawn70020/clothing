<template>
  <div class="top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">CLOTHING</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
      </li>
      <router-link to="/login" class="nav-link">
            ADMIN
          </router-link>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
    </ul>
  </div>
</nav>
    <div class="jumbotron">
  <h1 class="display-4 mx-auto">Welcome</h1>
  <hr class="hr1">
  <div class="content">
  <p>衣櫃裡總是少了那麼一件衣服嗎</p>
  <p><router-link to="/custom/customer_order" class="nav-link">
    <a class="btn btn-dark btn-lg" href="#" role="button">了解更多</a></router-link>
  </p></div>
</div>


  </div>
</template>


<style>

.jumbotron{
  background-image: url('https://i.screenshot.net/gnj26s9');
  background-repeat: no-repeat; 
  height: 590px;
  width: 1400px;
  color:aliceblue;
}

.content{
display:flex;
height: 300px;
flex-direction: column;
justify-content: center;

}
.content p{
font-family: "FangSong";
font-size: 23.5px;
letter-spacing: 1.85px;
  
}
.carousel-item {
  height: 70vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
