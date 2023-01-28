<template>
    <header class="header">
        <h1>Idaslet</h1>
        <Socials />
    </header>
</template>

<script>
import Socials from './Socials.vue';

export default {
    name: 'Header',
}
</script>

<style scoped>
.header {
    width: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
}
</style>