<template>
    <footer>
        <h2>Follow Idaslet on social media</h2>
        <Socials />
    </footer>
</template>

<script>
import Socials from './Socials.vue';

export default {
    name: "Footer",
    components: { Socials }
}
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>