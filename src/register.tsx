import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

import { ReactTranslatePanel } from './components/ReactTranslatePanel';
import { ADDON_ID, PANEL_ID, PANEL_TITLE } from './shared';

addons.register(ADDON_ID, () => {
  const render = ({
    active,
    key
  }: {
    active?: boolean;
    key?: string;
  }): React.ReactElement => (
    <AddonPanel active={Boolean(active)} key={key}>
      <ReactTranslatePanel />
    </AddonPanel>
  );

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: PANEL_TITLE,
    render
  });
});
