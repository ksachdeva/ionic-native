import { Plugin, Cordova } from './plugin';
/**
 * @name PowerManagement
 * @description
 * The PowerManagement plugin offers access to the devices power-management functionality.
 * It should be used for applications which keep running for a long time without any user interaction.
 *
 * @usage
 * ```
 * import {PowerManagement} from 'ionic-native';
 *
 * PowerManagement.acquire()
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-powermanagement-orig',
  pluginRef: 'https://github.com/Viras-/cordova-plugin-powermanagement',
  repo: 'powerManagement'
})
export class PowerManagement {
  /**
   * Acquire a wakelock by calling this.
   */
  @Cordova()
  static acquire(): Promise<any> {return; }

  /**
   * This acquires a partial wakelock, allowing the screen to be dimmed.
   */
  @Cordova()
  static dim(): Promise<any> {return; }

  /**
   * Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.
   */
  @Cordova()
  static release(): Promise<any> {return; }

  /**
   * By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
   * It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.
   * @param set {boolean}
   */
  @Cordova()
  static setReleaseOnPause(set: boolean): Promise<any> {return; }
}
