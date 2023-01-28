<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Footer />
  </div>
</template>

<script>
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "IndexPage",
  components: { About, Footer },
};
</script>
