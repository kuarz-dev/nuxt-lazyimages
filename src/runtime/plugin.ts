import { defineNuxtPlugin, useHead } from '#imports'
import lazyimagesOptions from '#lazyimages-options'

export default defineNuxtPlugin(async (nuxtApp) => {

    const scripts = []
    scripts.push({
        src: 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js',
        async: true
    })
    if (Object.keys(lazyimagesOptions).length > 0) scripts.push({ children: `window.lazySizesConfig = ${JSON.stringify(lazyimagesOptions)}` })

    useHead({
        script: scripts
    })
})