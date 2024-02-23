import { registerPlugin } from '@capacitor/core';
const AudioPlayingChecker = registerPlugin('AudioPlayingChecker', {
    web: () => import('./web').then(m => new m.AudioPlayingCheckerWeb()),
});
export * from './definitions';
export { AudioPlayingChecker };
//# sourceMappingURL=index.js.map