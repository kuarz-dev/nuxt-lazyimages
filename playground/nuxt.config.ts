import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        '../src/module'
    ],
    lazyimages: {
        lazyClass: 'lazyimages',
        expFactor: 5,
        plugins: {
            bgset: true
        }
    }
})
