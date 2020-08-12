import React from 'react';
import { addons } from '@storybook/addons';
import { useChannel } from '@storybook/api';
import { Form } from '@storybook/components';
import { FORCE_RE_RENDER } from '@storybook/core-events';

import { EVENTS } from './../shared';

export const ReactTranslatePanel = () => {
  const [languages, setLanguages] = React.useState([]);
  const [languageState, setLanguage] = React.useState('');
  useChannel({
    [EVENTS.SEND_OPTIONS]: ({ languages, language }) => {
      setLanguages(languages);
      setLanguage(language);
    }
  });

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(evt.target.value);
    localStorage.setItem(
      EVENTS.LOCAL_STORAGE.UPDATE_LANGUAGE,
      evt.target.value
    );
    addons.getChannel().emit(FORCE_RE_RENDER);
  };

  if (languages.length === 0) {
    return null;
  }
  return (
    <Form>
      <Form.Field label="Language">
        <Form.Select
          value={languageState}
          name="language"
          onChange={handleChange}
          size="flex"
        >
          {languages.map((languageOption) => (
            <option key={languageOption} value={languageOption}>
              {languageOption}
            </option>
          ))}
        </Form.Select>
      </Form.Field>
    </Form>
  );
};
