export interface AudioPlayingCheckerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    isPlayingAudio(): Promise<{
        playing: boolean;
    }>;
}
