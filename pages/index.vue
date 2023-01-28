<template>
  <div>
    <Home />
    <About />
    <Footer />
  </div>
</template>

<script>
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "IndexPage",
  components: { About, Footer },
};
</script>
