/* eslint-disable react/display-name */
import React from 'react';
import { TranslateProvider } from '@rogal/react-translate';
import { addons, makeDecorator } from '@storybook/addons';

import { EVENTS } from './../shared';

const withReactTranslate = makeDecorator({
  name: 'withReactTranslate',
  parameterName: 'reactTranslate',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { options }) => {
    const channel = addons.getChannel();
    const language =
      localStorage.getItem(EVENTS.LOCAL_STORAGE.UPDATE_LANGUAGE) ||
      options.language;

    channel.emit(EVENTS.SEND_OPTIONS, { ...options, language });

    const i18n = {
      fallbackLng: options.fallbackLng,
      languages: options.languages,
      language: language,
      translations: options.translations
    };
    return (
      <TranslateProvider i18n={i18n}>{getStory(context)}</TranslateProvider>
    );
  }
});

export default withReactTranslate;
