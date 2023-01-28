<template>
  <section class="about">
    <div class="about__description">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
        enim ac orci efficitur, eget pulvinar enim dapibus. Suspendisse blandit
        eu ipsum porta scelerisque. Nullam tempor turpis at commodo vestibulum.
        Proin et nisi leo. Maecenas euismod consequat lobortis. Integer mollis
        lectus a augue sollicitudin, eget cursus ligula sollicitudin. Vivamus
        consequat est at felis venenatis, nec elementum ligula porttitor.
        Curabitur pellentesque dictum tempor. Nulla vehicula turpis dolor, eget
        porta tellus fringilla ac. Donec risus sem, tempor vel purus non, rutrum
        viverra urna. Pellentesque sed diam a lacus lobortis volutpat. Integer
        mattis elementum tempus. Sed nec nulla sit amet sem gravida feugiat sit
        amet quis lacus. Curabitur ipsum elit, pellentesque ac leo sit amet,
        rutrum mattis est. In iaculis, lorem et tincidunt venenatis, magna eros
        congue nulla, ut hendrerit magna risus in nulla. Fusce tellus nunc,
        commodo sit amet tortor at, aliquet placerat erat. Fusce quis nulla sed
        lectus aliquam euismod eget ut dui.
      </p>
    </div>
    <div class="about__music">
      <Music />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
  gap: 3rem;
}

.about__description p {
    line-height: 1.5rem;
    color: var(--white);
}

@media only screen and (min-width: 768px) {
    .about {
        padding: 6rem 4rem; 
    }
}

@media only screen and (min-width: 1200px) {
    .about {
        padding: 8rem;
        flex-direction: row;
    }

    .about__description,
    .about__music {
        width: 50%;
    }
}
</style>
