<template>
    <nav>
        <h1>Idaslet</h1>
        <Socials />
    </nav>
</template>

<script>
import Socials from './Socials.vue';

export default {
    name: 'Navbar',
}
</script>

<style scoped>
nav {
    width: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
}
</style>