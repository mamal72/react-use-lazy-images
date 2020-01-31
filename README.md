![NPM](https://img.shields.io/npm/l/react-use-lazy-images) [![Build Status](https://travis-ci.com/mamal72/react-use-lazy-images.svg?branch=master)](https://travis-ci.com/mamal72/react-use-lazy-images) ![David](https://img.shields.io/david/mamal72/react-use-lazy-images) ![npm](https://img.shields.io/npm/v/react-use-lazy-images) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-use-lazy-images) ![npm](https://img.shields.io/npm/dm/react-use-lazy-images)

# react-use-lazy-images

Minimal zero dependency lazy load images solution with simple React Hook for all images of an element.

Note that this package is using [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and won't do anything if this API isn't available on the user's browser.


## Installation

Using NPM:

```bash
npm install react-use-lazy-images
```

Using Yarn:

```bash
yarn add react-use-lazy-images
```


## Usage

```tsx
import React from 'react'
import { useLazyImages } from 'react-use-lazy-images'

const STYLES = {
  height: "5000px",
  margin: '0 auto',
  width: '100%'
}

export function OctoCats() {
  const ref = useLazyLoadImages<HTMLDivElement>({
    placeholderSrc:
      "https://octodex.github.com/images/vinyltocat.png"
  });
  return (
    <div ref={ref} style={STYLES}>
      <h1>React Use Lazy Images</h1>
      <img
        alt="Vinyltocat"
        src="https://octodex.github.com/images/surftocat.png"
      />
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <img
        alt="Surftocat"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
      />
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <img
        alt="Justicetocat"
        src="https://octodex.github.com/images/justicetocat.jpg"
      />
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <img
        alt="Private Investocat"
        src="https://octodex.github.com/images/privateinvestocat.jpg"
      />
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <img
        alt="Robotocat"
        src="https://octodex.github.com/images/Robotocat.png"
      />
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <h2>Some Elements Between</h2>
      <img
        alt="Spidertocat"
        src="https://octodex.github.com/images/spidertocat.png"
      />
    </div>
  );
}
```


## Contribution

You can report bugs and issues [here](https://github.com/mamal72/react-use-lazy-images/issues/new).

You can also send a PR if you feel like you can improve or fix something. Don't forget to write/update tests for your changes.
