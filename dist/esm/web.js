import { WebPlugin } from "@capacitor/core";
export class AudioPlayingCheckerWeb extends WebPlugin {
    async echo(options) {
        console.log("ECHO", options);
        return options;
    }
    async isPlayingAudio() {
        return { playing: false };
    }
}
//# sourceMappingURL=web.js.map