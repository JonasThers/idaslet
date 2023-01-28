<template>
  <div class="hero" />
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.hero {
  height: 100vh;
  background-image: url(~/static/background-desktop.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
