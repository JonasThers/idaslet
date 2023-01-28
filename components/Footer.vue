<template>
  <footer class="footer">
    <h2 class="footer__header">Follow Idaslet on social media</h2>
    <Socials />
    <div class="footer__emails">
      <p>Booking: <a href="mailto:Booking@Idaslet.dk">Booking@Idaslet.dk</a></p>
      <p>General inquiries: <a href="mailto:Idaslet@Idaslet.dk">Idaslet@Idaslet.dk</a></p>
    </div>
  </footer>
</template>

<script>
import Socials from "./Socials.vue";

export default {
  name: "Footer",
  components: { Socials },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
}

.footer__header {
  text-transform: capitalize;
  color: var(--white);
}

.footer__emails {
    color: var(--white);
    text-align: center;
}

.footer__emails a {
    color: var(--white);
    text-decoration: none;
}
</style>
