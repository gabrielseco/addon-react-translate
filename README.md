# Addon React-Translate [![NPM Version](https://img.shields.io/npm/v/@rogal/addon-react-translate.svg)](https://www.npmjs.com/package/@rogal/addon-react-translate) [![NPM Downloads](https://img.shields.io/npm/dm/@rogal/addon-react-translate.svg)](https://www.npmjs.com/package/addon-react-translate) [![Actions Status](https://github.com/gabrielseco/react-translate/workflows/build/badge.svg)](https://github.com/gabrielseco/addon-react-translate/actions) [![Actions Status](https://github.com/gabrielseco/addon-react-translate/workflows/ci/badge.svg)](https://github.com/gabrielseco/addon-react-translate/actions)

> An addon for storybook to change language in your stories along with react-translate with ease

## Install

```sh
npm install @rogal/addon-react-translate --save-dev
```

### Getting Started

In your **main.js**, in the **addons** array add

```js
{
  addons: [
    // other addons...

    "@rogal/addon-react-translate"
  ]
}

```

And then in your **preview.js**

```js
import { withReactTranslate } from '@rogal/addon-react-translate';

addDecorator(
  withReactTranslate({
    languages: ['en', 'es'],
    language: 'en',
    fallbackLng: 'en',
    translations: {
      en: {
        collection: collectionEN,
      },
      es: {
        collection: collectionES,
      }
    }
  })
);
```

And then you are good to go

## Features

- Change the language of your stories with a selectbox



## License

MIT