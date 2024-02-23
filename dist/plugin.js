var capacitorAudioPlayingChecker = (function (exports, core) {
    'use strict';

    const AudioPlayingChecker = core.registerPlugin('AudioPlayingChecker', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AudioPlayingCheckerWeb()),
    });

    class AudioPlayingCheckerWeb extends core.WebPlugin {
        async echo(options) {
            console.log("ECHO", options);
            return options;
        }
        async isPlayingAudio() {
            return false;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AudioPlayingCheckerWeb: AudioPlayingCheckerWeb
    });

    exports.AudioPlayingChecker = AudioPlayingChecker;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
