<template>
  <div>
    <Header />
    <Home />
    <About />
    <Footer />
  </div>
</template>

<script>
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Header from '../components/Header.vue';

export default {
  name: "IndexPage",
  components: { About, Footer, Header },
};
</script>
