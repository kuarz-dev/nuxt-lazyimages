import { defineNuxtPlugin } from "#app";
import { lazySizes } from './lazysizes'
import lazyimagesOptions from "#lazyimages-options";

export default defineNuxtPlugin(async (nuxtApp) => {

    const w = (typeof window != 'undefined' ? window : {})
    const lazysizes = lazySizes(w, w.document, Date)

    // Assign custom options
    Object.assign(lazysizes.cfg, lazyimagesOptions)

    // Plugins
    if (lazyimagesOptions.plugins.bgset && typeof window != 'undefined') {
        const { bgset } = await import('./plugins/bgset')
        bgset(window, window.document, lazysizes)
    }

    // Init with new config
    lazysizes.init()

});