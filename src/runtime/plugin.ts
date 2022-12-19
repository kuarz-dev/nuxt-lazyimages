import { defineNuxtPlugin } from '#app'
import lazySizes from 'lazysizes'
import lazyimagesOptions from '#lazyimages-options'

// Prevent automatic initialization
lazySizes.cfg.init = false

export default defineNuxtPlugin((nuxtApp) => {

    // Assign custom options to Lazysizes
    Object.assign(lazySizes.cfg, lazyimagesOptions)

    // Manual initialization
    lazySizes.init()
})