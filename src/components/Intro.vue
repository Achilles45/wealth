<template>
  <div class="intro">
     <div class="container">
          <div class="row">
          <div class="col-md-2 image__holder">
              <!-- <img src="../assets/images/img2.svg" class="img-fluid image" alt=""><br><br> -->
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="col-md-8 text-center">
              <h2>About Wealth Arena Investment</h2>
              <hr>
              <p>Wealth Arena Investment Company was created with the aim of eliminating poverty and hardship from Nigeria. It's a reliable and genuine platform created for the benefit of every Nigerian to achieve wealth and happiness by investing and getting back your investment in 3 days and 24hours without any delay or stress in payment <br> Wealth Arena Investment Company is real and sincere and we shall duly deliver good result. </p>
               <router-link to="/signup" class="intro-btn animated zoomIn animate3d">Get Started <i class="fas fa-long-arrow-alt-right"></i> </router-link>
          </div>
          <div class="col-md-2"></div>
      </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.intro{
    padding: 5rem 0;
    // background: $primary-color;
    // color: #fff;
    // .image__holder::after{
    //     content: "";
    //     width: 200px;
    //     position: absolute;
    //     margin: 0 auto;
    //     height: 100%;
    //     width: 95%;
    //     background: transparent;
    //     border: 5px solid $primary-color;
    //     left: 50px;
    //     right: 0;
    //     bottom: 30px;
    //     z-index: -10;
    // }
    .image{
        border-radius: 4px;
    }
    h2{
        font-weight: bolder;
        color: #2b2b2b;
        font-size: 2.5rem;
    }
//       h2::after {
// 	content: "";
// 	width: 200px;
// 	position: absolute;
// 	margin: 0 15px;
// 	height: 5px;
// 	background: $secondary-color;
// 	left: 0;
// 	right: 0;
//     top: 150px;
// }
    p{
        line-height: 2;
        padding-top: .5rem;
        color: #627081;
        opacity: .85;
        font-size: .9rem;
        padding-bottom: 1.5rem;
    }
    .orange{
        color: $secondary-color;
    }
    hr{
        background: #fff;
        opacity: .7;
    }
    .intro-btn {
      color: #fff;
      background: $secondary-color;
      padding: 1.2rem 2rem;
      text-align: center;
      font-size: 1rem;
      font-weight: normal;
      text-decoration: none;
      border-radius: 50px;
      border: 1px solid $secondary-color;
      text-transform: capitalize;
    }
}

//Media Queries
@media only screen and (max-width: 600px){
    h2{
        font-size: 1.8rem !important;
        line-height: 1.5 !important;
    }
}
</style>