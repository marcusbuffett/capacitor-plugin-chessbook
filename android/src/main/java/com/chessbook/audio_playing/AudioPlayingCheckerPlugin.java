package com.chessbook.audio_playing;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AudioPlayingChecker")
public class AudioPlayingCheckerPlugin extends Plugin {

    private AudioPlayingChecker implementation = new AudioPlayingChecker();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void isPlayingAudio(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("playing", false);
        call.resolve(ret);
    }
}
