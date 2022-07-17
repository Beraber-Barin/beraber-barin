<template>

  
    <div class="flex-child-svg">
      <img src="./assets/Beraber_Barn_Logo.svg" alt="" />
    </div>
    <p class="bb-yazi">Beraber Barın ile ev arkadaşı bulmak artık çok kolay! Edu mail adresinle kaydol, binlerce ilana göz at veya kendi ilanını yarat!</p>
    <div class="vue-tempalte flex-child">

      <!-- Main -->
      <div class="App">
        <div class="vertical-center">
          <div class="inner-block">
            <router-view />
          </div>
        </div>
      </div>
    </div>
   
<img class="background_svg" src="./assets/sar_dalga_grafik.svg" alt="" />

</template>

<script>

</script>

<style scoped>
.background_svg {
  position:fixed;
  bottom:0px;
  z-index:-1;
}

.signupform {
  position:fixed;
  right:10px;
}

.registration_parent {
  border: 1px solid black;
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
}
.registration_child {
  display: inline-block;
  border: 1px solid red; /* temp */
  padding: 1rem 1rem;
  vertical-align: middle;
}

.flex-container {
    display: flex;
}

.flex-child-svg {
  position: absolute;
  /* width: 322px;
  height: 229.19px;
  left: 296px;
  top: 277px; */
  left: 15.42%;
  right: 67.81%;
  top: 25.65%;
  bottom: 53.13%;

}  

.flex-child {
  position: absolute;
  width: 656px;
  height: 712px;
  left: 1120px;
  top: 200px;

}

p.bb-yazi {
  position: absolute;
  width: 582px;
  height: 90px;
  left: 270px;
  top: 520px;

  font-family: 'MADE TOMMY';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

/* Black */

color: #313131;
}

</style>

<!-- <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
