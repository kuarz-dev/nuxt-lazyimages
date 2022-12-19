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
npm install --save-dev @kuarz-dev/nuxt-lazyimages

# Using yarn
yarn add --dev @kuarz-dev/nuxt-lazyimages
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

## Development

- Clone this repository
- Install dependencies using `npm install`
- Stub module with `npm dev:prepare`
- Run `npm dev` to start [playground](./playground) in development mode

## Credits

This simple library is a simple wrapper around Alexander Farkas' [LazySizes](https://github.com/aFarkas/lazysizes) super-fast lazyloader. All credit goes to him.

## License

Published under the [MIT License](./LICENSE).