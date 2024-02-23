import Foundation
import Capacitor
import AVFoundation

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AudioPlayingCheckerPlugin)
public class AudioPlayingCheckerPlugin: CAPPlugin {
    private let implementation = AudioPlayingChecker()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func isPlayingAudio(_ call: CAPPluginCall) {
        call.resolve([
            "playing": AVAudioSession.sharedInstance().secondaryAudioShouldBeSilencedHint
        ])
    }
}
