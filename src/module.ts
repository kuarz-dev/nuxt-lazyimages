import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addTemplate, createResolver } from '@nuxt/kit'

export interface PluginOptions {
    /**  This simple and small plugin allows you to define multiple background images with a width descriptor */
    bgset?: boolean,
}

export interface ModuleOptions {
    /** Marker class for all elements which should be lazy loaded. */
    lazyClass?: string,
    /** Whether lazysizes should load all elements after the window onload event. */
    preloadAfterLoad?: boolean,
    /** This class will be added to any element as soon as the image is loaded or the image comes into view. */
    loadedClass?: string,
    /** This class will be added to img element as soon as image loading starts. */
    loadingClass?: string,
    /** Marker class for elements which should be lazy pre-loaded after onload. */
    preloadClass?: string,
    /** This class will be added to any element when an error occurs. */
    errorClass?: string,
    /** Marker class for autosizes */
    autosizesClass?: string,
    /** This class will be added to img element as soon the the image is loaded from cache. */
    fastLoadedClass?: string,
    /** The iframeLoadMode can be used to constrain the allowed loading mode for iframes. */
    iframeLoadMode?: number,
    /** The attribute, which should be transformed to src. */
    srcAttr?: string,
    /** The attribute, which should be transformed to srcset. */
    srcsetAttr?: string,
    /** The attribute, which should be transformed to sizes. */
    sizesAttr?: string,
    /** The minimum size of an image that is used to calculate the sizes attribute. */
    minSize?: number,
    /** The customMedia option object is an alias map for different media queries. */
    customMedia?: object,
    /** The expand option expands the calculated visual viewport area in all directions, so that elements can be loaded before they become visible. */
    expand?: boolean,
    /** The expFactor is used to calculate the "preload expand", by multiplying the normal expand with the expFactor which is used to preload assets while the browser is idling */
    expFactor?: number,
    /** The hFac (horizontal factor) modifies the horizontal expand by multiplying the expand value with the hFac value. */
    hFac?: number,
    /** The loadMode can be used to constrain the allowed loading mode. */
    loadMode?: number,
    /** Whether to load visibility: hidden elements. */
    loadHidden?: boolean,
    /** The timeout option used for the requestIdleCallback.  */
    ricTimeout?: number,
    /** The timeout option used to throttle all listeners.  */
    throttleDelay?: number
    /** Activate plugins */
    plugins?: PluginOptions
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'nuxt-lazyimages',
        configKey: 'lazyimages'
    },
    defaults: {
        plugins: {
            bgset: false
        }
    },
    setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

        nuxt.options.build.transpile.push(runtimeDir)

        // Inject options via virtual template
        nuxt.options.alias['#lazyimages-options'] = addTemplate({
            filename: 'lazyimages-options.mjs',

            getContents() {
                return `export default ${JSON.stringify(options)}`
            },
        }).dst

        addPlugin({
            src: resolve(runtimeDir, 'plugin'),
            mode: 'client'
        })
    }
})
