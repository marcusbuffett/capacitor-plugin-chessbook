import { registerPlugin } from '@capacitor/core';

import type { AudioPlayingCheckerPlugin } from './definitions';

const AudioPlayingChecker = registerPlugin<AudioPlayingCheckerPlugin>(
  'AudioPlayingChecker',
  {
    web: () => import('./web').then(m => new m.AudioPlayingCheckerWeb()),
  },
);

export * from './definitions';
export { AudioPlayingChecker };
