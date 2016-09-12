import { Plugin, Cordova } from './plugin';

/**
 * @name CallNumber
 * @description
 * Call a number directly from your Cordova/Ionic application.
 *
 * @usage
 * ```
 * import {CallNumber} from 'ionic-native';
 *
 * CallNumber.callNumber(18001010101, true)
 *   .then(() => console.log('Launched dialer!'))
 *   .catch(() => console.log('Error launching dialer'));
 *
 * ```
 */
@Plugin({
  plugin: 'call-number',
  pluginRef: 'plugins.CallNumber',
  repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
  platforms: ['iOS', 'Android']
})
export class CallNumber {
  /**
   * Calls a phone number
   * @param numberToCall {number} The phone number to call
   * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static callNumber(numberToCall: number, bypassAppChooser: boolean): Promise<any> {
    return;
  }
}
