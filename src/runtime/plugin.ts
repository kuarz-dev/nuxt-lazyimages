import { defineNuxtPlugin, useHead } from '#imports'
import lazyimagesOptions from '#lazyimages-options'

export default defineNuxtPlugin(async (nuxtApp) => {

    const lazySizes = await import('lazysizes')

    // Assign custom options to Lazysizes
    Object.assign(lazySizes.cfg, lazyimagesOptions)
    
})