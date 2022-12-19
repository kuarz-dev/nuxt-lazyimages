# Nuxt Lazyimages

> Simple [LazySizes](https://github.com/aFarkas/lazysizes) module for [Nuxt 3](https://v3.nuxtjs.org)

## Features
- ✨ Helps you load `lazysizes` in your Nuxt 3 project
- 🔥 Easily pass the `Defer offscreen images audit` audit con Lighthouse
- 🧰 Fully customize the library from your nuxt config file
- 👌 No manual configuration needed to start

## Installation

Add `nuxt-lazyimages` to your project:

```bash
npm install --save-dev nuxt-lazyimages

# Using yarn
yarn add --dev nuxt-lazyimages
```

Add it to the `modules` array in your `nuxt.config.ts`:

```ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['nuxt-lazyimages']
})
```

Add the default `class` `lazyload` to your image in conjunction with a `data-src` and/or `data-srcset` attribute. 

```html
<!-- non-responsive: -->
<img data-src="image.jpg" class="lazyload" />
```

```html
<!-- responsive example with automatic sizes calculation: -->
<img
    data-sizes="auto"
    data-src="image2.jpg"
    data-srcset="image1.jpg 300w,
    image2.jpg 600w,
    image3.jpg 900w" class="lazyload" />
```

✨ That's it!

## Configuration

If you wish to change the configuration of Lazysizes, open your `nuxt.config.ts` or `nuxt.config.js` file, and set the configuration using the `lazyimages` object:

```ts
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    modules: [
        'nuxt-lazyimages'
    ],
    lazyimages: {
        // Default configuration:
        lazyClass: 'lazyload',
        preloadAfterLoad: false,
        loadedClass: 'lazyloaded',
        loadingClass: 'lazyloading',
        preloadClass: 'lazypreload',
        errorClass: 'lazyerror',
        autosizesClass: 'lazyautosizes',
        fastLoadedClass: 'ls-is-cached',
        iframeLoadMode: 0,
        srcAttr: 'data-src',
        srcsetAttr: 'data-srcset',
        sizesAttr: 'data-sizes',
        minSize: 40,
        customMedia: {},
        expFactor: 1.5,
        hFac: 0.8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
    }
});
```

Please refer to [LazySizes' JS documentation](https://github.com/aFarkas/lazysizes#js-api) to know more about each option.

## Development

- Clone this repository
- Install dependencies using `npm install`
- Stub module with `npm run dev:prepare`
- Run `npm run dev` to start [playground](./playground) in development mode

## Credits

This simple library is a simple wrapper around Alexander Farkas' [LazySizes](https://github.com/aFarkas/lazysizes) super-fast lazyloader. All credit goes to him.

## License

Published under the [MIT License](./LICENSE).