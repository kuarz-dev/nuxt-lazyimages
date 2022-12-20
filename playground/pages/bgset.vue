<template>
    <div>
        This background image will lazyload with a fade in:<br />
        <div class="background lazyimages" data-bgset="/torino.jpeg"></div>
        <Navigation/>
    </div>
</template>

<script setup>
</script>

<style scoped>
.background {
    height: 525px;
    width: 700px;
    opacity: 0;
    transition: opacity 500ms 0ms ease-in-out;
}

.background.lazyloaded {
    opacity: 1;
}
</style>