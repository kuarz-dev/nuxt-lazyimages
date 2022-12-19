<template>
    <div>
        This image will lazyload with a fade in:<br />
        <img class="lazyimages" data-src="/torino.jpeg" height="525" width="700" alt="">
    </div>
</template>

<script setup>
</script>

<style scoped>
img {
    opacity: 0;
    transition: opacity 500ms 0ms ease-in-out;
}

img.lazyloaded {
    opacity: 1;
}
</style>