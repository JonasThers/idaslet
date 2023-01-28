<template>
  <header class="header" :class="{ 'header--dark': !topOfPage }">
    <h1 class="header__title" :class="{ 'header__title--white': !topOfPage }">Idaslet</h1>
    <Socials />
  </header>
</template>

<script>
import Socials from "./Socials.vue";

export default {
  name: "Header",
  data() {
    return {
      topOfPage: true,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  transition: all .2s ease-in-out;
}

.header__title {
    transition: all .2s ease-in-out;
}

.header--dark {
    background: var(--transparent-black);
}

.header__title--white {
    color: var(--white);
}
</style>
