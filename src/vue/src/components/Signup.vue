<template>
  <div class="vue">
    <form class="formdiv">
      <h3>Sign Up</h3>

      <div class="">
        <input placeholder="Ad" type="text" class="input-small" />
      </div>
      <div>
          <input placeholder="Soyad" type="text" class="input-small-surname" />
      </div>

      <div class="">
        <input placeholder="Edu Mail" type="email" class="input-large" />
      </div>

      <div class="">
        <input placeholder="Şifre" type="password" class="input-large" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>

      <p class="forgot-password text-right">
          Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
    <input class="input-small" type="text" placeholder="input test" />
  </div>
</template>
 
<script>
export default {
  name: "Signup",
  data() {
    return {};
  },
};
</script>