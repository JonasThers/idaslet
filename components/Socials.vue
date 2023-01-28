<template>
  <div class="socials">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.url"
      class="link"
      target="_blank"
    >
      <img :src="social.img" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Socials",
  data() {
    return {
      socials: [
        {
          alt: "Spotify link",
          url: "https://open.spotify.com/artist/6uTmzUp8K9iXpV2peh3F6St",
          img: "spotify-icon.png",
        },
        {
          alt: "Facebook link",
          url: "https://www.facebook.com/Idaslet",
          img: "facebook-icon.png",
        },
        {
          alt: "Youtube link",
          url: "https://www.youtube.com/@idaslet8004",
          img: "youtube-icon.png",
        },
        {
          alt: "Instagram link",
          url: "https://www.instagram.com/Idaslet_Official/",
          img: "instagram-icon.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.socials {
    display: flex;
    align-items: center;
}

.link {
    padding: .75rem;
}

img {
    max-width: 2rem;
    width: 100%;
}
</style>
