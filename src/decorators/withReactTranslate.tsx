/* eslint-disable react/display-name */
import React from 'react';
import { TranslateProvider } from '@rogal/react-translate';
import { addons, makeDecorator } from '@storybook/addons';

import { EVENTS } from './../shared';

export default makeDecorator({
  name: 'withReactTranslate',
  parameterName: 'reactTranslate',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { options }) => {
    const channel = addons.getChannel();
    const language =
      localStorage.getItem(EVENTS.LOCAL_STORAGE.UPDATE_LANGUAGE) ||
      options.language;

    channel.emit(EVENTS.SEND_OPTIONS, { ...options, language });

    const providerValue = {
      fallbackLng: options.fallbackLng,
      languages: options.languages,
      language: language,
      translations: options.translations
    };
    return (
      <TranslateProvider value={providerValue}>
        {getStory(context)}
      </TranslateProvider>
    );
  }
});
