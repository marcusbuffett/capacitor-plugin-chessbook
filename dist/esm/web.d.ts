import { WebPlugin } from "@capacitor/core";
import type { AudioPlayingCheckerPlugin } from "./definitions";
export declare class AudioPlayingCheckerWeb extends WebPlugin implements AudioPlayingCheckerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    isPlayingAudio(): Promise<boolean>;
}
