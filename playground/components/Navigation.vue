<template>
    <nav>
        <NuxtLink to="/">Basic example</NuxtLink>
        <NuxtLink to="/bgset">Bgset plugin</NuxtLink>
    </nav>
</template>

<script setup></script>

<style scoped>
nav {
    margin: 1em 0;
    display: flex;
    flex-direction: column;
}
nav a {
    display: inline-block
}
</style>