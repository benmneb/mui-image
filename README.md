# 🌅 `mui-image`

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Materialize your images... the right way.

### 🏆 The only Material-UI image component to satisfy the Material guidelines for loading images.

#### _Made with ❤️ for Material-UI v5_

(If you need to support legacy versions of Material-UI, use [`material-ui-image`](https://github.com/TeamWertarbyte/material-ui-image) instead.)

---

### You're already using [Material-UI](https://mui.com)... you may as well display your images according to the Material guidelines too.

> Visualize the image fading in, like a print during the photo development process. Images should begin loading with low contrast levels and desaturated color. Once image opacity reaches 100%, display the image with full-color saturation.
>
> \- [Google's Material guidelines](https://material.io/archive/guidelines/patterns/loading-images.html#loading-images-usage)

### 1. Install

```
> npm i mui-image

or

> yarn add mui-image
```

### 2. Use

```
import { Image } from 'mui-image'

<Image src="my-image.png" />
```

### 3. Profit

## 💰

---

## Usage Examples

You can use `mui-image` like a regular image.

```
<Image src="my-image.png" />
```

Except... it will fade and animate in as the Material guidelines recommend. 🤯

Add a `height` and/or `width` to reserve space on the page for the image and avoid uncomforable content shifts as your picture loads. They both default to 100% of the parent you place them in and accept any valid CSS property. Numbers are converted to pixels.

```
<Image src="my-image.png" width={500} />
<Image src="my-image.png" height="90vh" />
```

Apply the `showLoading` prop to add a progress indicator to let your fans know something amazing is coming. You can use the default MUI indicator or bring your own. 😎

```
<Image src="my-image.png" showLoading />
<Image src="my-image.bmp" showLoading={<MyCustomSpinner />} />
```

If you want the image to fail silently you can disable the error icon, or you can add your own to suit your brand.

```
<Image src="my-cats.png" errorIcon={null} />
<Image src="my-dogs.png" errorIcon={<MyErrorIcon />} />
```

If you want to _disobey Google_ 😵 then you can customise the animation and speed via the `duration` and `easing` props to any valid CSS property. Duration is always milliseconds.

```
<Image src="my-fish.png" duration={325} />
<Image src="my-bird.jpg" easing="ease-in-out" />
```

To add that extra bit of spice 🌶 you can do exactly what Google suggests and apply a small position shift to images as they appear. The direction and distance (in pixels) is up to you.

```
<Image src="my-gawd.png" shift="left" />
<Image src="my-lawd.jpg" shift="top" distance={300} />
```

And of course, you can style `mui-image` like you would a regular image.

```
<Image src="my-self.jpeg" style={{ borderRadius: 16 }} />
<Image src="my-exgf.webp" className="image-custom-class" />
```

If you want to get fancy 💃 you can also style the root wrapper `div` and loading/error icon wrapper `div` the same way. This allows for complete customisation of the component.

Like and subscribe below for more. ⏬

---

## All Props

| Name             | Type             | Default                      | Description                                                                                                                |
| ---------------- | ---------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| src              | string           |                              | image `src` tag... _required_                                                                                              |
| alt              | string           | ""                           | image `alt` tag value                                                                                                      |
| height           | number / string  | "100%"                       | any valid [CSS `height` value](https://developer.mozilla.org/en-US/docs/Web/CSS/height)                                    |
| width            | number / string  | "100%"                       | any valid [CSS `width` value](https://developer.mozilla.org/en-US/docs/Web/CSS/width)                                      |
| position         | string           | "relative"                   | any valid [CSS `position` value](https://developer.mozilla.org/en-US/docs/Web/CSS/position)                                |
| objectFit        | string           | "fill"                       | any valid [CSS `object-fit` value](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#syntax)                     |
| style            | object           |                              | inline styles for the image                                                                                                |
| className        | string           |                              | CSS `class` for the image                                                                                                  |
| showLoading      | boolean / node   | false                        | display default loading spinner, or your own                                                                               |
| errorIcon        | boolean / node   | true                         | display default error icon, or your own                                                                                    |
| shift            | boolean / string | false                        | either "left", "right", "top", "bottom", `null`, or `false`                                                                |
| distance         | number           | 100                          | amount of pixels to shift the image                                                                                        |
| shiftDuration    | number           | duration \* 0.3              | duration of shift in milliseconds                                                                                          |
| bgColor          | string           | "inherit"                    | the color the image transitions in from                                                                                    |
| wrapperStyle     | object           |                              | inline styles for the root wrapper `div`                                                                                   |
| iconWrapperStyle | object           |                              | inline styles for the icon wrapper `div`                                                                                   |
| wrapperClass     | string           |                              | CSS `class` for the root wrapper `div`                                                                                     |
| iconWrapperClass | string           |                              | CSS `class` for the icon wrapper `div`                                                                                     |
| duration         | number           | 3000                         | sets the CSS [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) in milliseconds |
| easing           | string           | cubic-bezier(0.7, 0, 0.6, 1) | sets the CSS [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)   |
| onLoad           | func             |                              | do something when the image loads                                                                                          |
| onError          | func             |                              | do something if the image doesn't load                                                                                     |

Any other props are passed directly to the native `img` element.

---

## Material guidelines for loading images

> #### ✅ Progressive fade-in
>
> Visualize the image fading in, like a print during the photo development process.

> #### ✅ Duration
>
> A longer duration is recommended for loading images, and a shorter duration is recommended for transitions.

> #### ✅ Animation
>
> Add a small position shift to loading images.

[(Source)](https://material.io/archive/guidelines/patterns/loading-images.html#loading-images-behavior)

---

## License

© [benmneb](https://github.com/benmneb)

[ISC License](https://choosealicense.com/licenses/isc/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
