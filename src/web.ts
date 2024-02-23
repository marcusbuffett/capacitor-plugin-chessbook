import { WebPlugin } from "@capacitor/core";

import type { AudioPlayingCheckerPlugin } from "./definitions";

export class AudioPlayingCheckerWeb
	extends WebPlugin
	implements AudioPlayingCheckerPlugin
{
	async echo(options: { value: string }): Promise<{ value: string }> {
		console.log("ECHO", options);
		return options;
	}
	async isPlayingAudio(): Promise<boolean> {
		return false;
	}
}
