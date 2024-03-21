'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AudioPlayingChecker = core.registerPlugin('AudioPlayingChecker', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AudioPlayingCheckerWeb()),
});

class AudioPlayingCheckerWeb extends core.WebPlugin {
    async echo(options) {
        console.log("ECHO", options);
        return options;
    }
    async isPlayingAudio() {
        return { playing: false };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AudioPlayingCheckerWeb: AudioPlayingCheckerWeb
});

exports.AudioPlayingChecker = AudioPlayingChecker;
//# sourceMappingURL=plugin.cjs.js.map
