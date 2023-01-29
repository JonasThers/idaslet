<template>
  <Fragment>
    <Header />
    <Home />
    <About />
    <Footer />
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Header from '../components/Header.vue';

export default {
  name: "IndexPage",
  components: { About, Footer, Header, Fragment },
};
</script>
