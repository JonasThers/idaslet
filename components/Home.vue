<template>
  <section class="hero" />
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.hero {
  height: 320px;
  background-image: url(~/static/background-mobile.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media only screen and (min-width: 768px) {
    .hero {
        height: 50vh;
    }
}

@media only screen and (min-width: 1200px) {
  .hero {
    height: 100vh;
    background-image: url(~/static/background-desktop.jpg);
  }
}
</style>
