# Addon React-Translate [![NPM Version](https://img.shields.io/npm/v/@rogal/addon-react-translate.svg)](https://www.npmjs.com/package/@rogal/addon-react-translate) [![NPM Downloads](https://img.shields.io/npm/dm/@rogal/addon-react-translate.svg)](https://www.npmjs.com/package/addon-react-translate) [![Travis](https://travis-ci.org/gabrielseco/react-translate.svg?branch=master)](https://travis-ci.org/gabrielseco/addon-react-translate) [![Coverage Status](https://coveralls.io/repos/github/gabrielseco/react-translate/badge.svg?branch=master)](https://coveralls.io/github/gabrielseco/addon-react-translate?branch=master)

> An addon for storybook to change language in your stories along with react-translate with ease

## Install

```sh
npm install @rogal/addon-react-translate --save-dev
```

### Getting Started

In your **addons.js** file you just import

```js
import '@rogal/addon-react-translate/register';
```

And then in your **config.js**

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

### Features

- Change the language of your stories with a selectbox


### How to contribute #TODO


## License

MIT