<template>
  <section class="about">
    <div class="about__description">
      <h3 class="about__description-header">
        Idaslet is a danish folk metal band based in Copenhagen
      </h3>
      <p class="about__description-text">
        Idaslet sprouts in the soil of the Danish underground. With their
        version of folk metal, Idaslet set off on their first viking voyage in
        2020 with the release of their EP "Lurernes Glammen", and has now set
        sail for the Danish cities. With roots firmly planted in sagas and folk
        songs, Idaslet sings Danish stanzas both with growl and beautiful clean
        vocals.
      </p>
      <p class="about__description-text">
        Accordions and guitars enrich the soundscape with folk melodies, while
        drums and bass deliver rhythms that invite you to dance and sing along.
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
  padding: 2rem;
  gap: 3rem;
}

.about__description-header {
  color: var(--white);
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: 2rem;
}
.about__description-text {
  line-height: 1.5rem;
  color: var(--white);
  font-size: 18px;
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
