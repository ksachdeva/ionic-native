import { Plugin, Cordova } from './plugin';
import { Observable } from '@reactivex/rxjs';
/**
 * @name Shake
 * @description Handles shake gesture
 * @usage
 * ```typescript
 * import {Shake} from 'ionic-native';
 *
 * let watch = Shake.startWatch(60).subscribe(() => {
 *   // do something
 *   });
 *
 * watch.unsubscribe();
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-shake',
  pluginRef: 'shake',
  repo: 'https://github.com/leecrossley/cordova-plugin-shake'
})
export class Shake {
  /**
   * Watch for shake gesture
   * @param sensitivity {number} Optional sensitivity parameter. Defaults to 40
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopWatch',
    successIndex: 0,
    errorIndex: 2
  })
  static startWatch(sensitivity?: number): Observable<any> {return; }

}
