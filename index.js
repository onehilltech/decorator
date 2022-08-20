/*
 * Copyright (c) 2022 One Hill Technologies, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { isObjectLike } = require ('lodash');

module.exports = function decorator (decoratorFn) {
  return function () {
    const decoratorParams = [...arguments];
    const [target, name, descriptor] = decoratorParams;

    if (descriptor || (target && isObjectLike (target.prototype))) {
      // This is a decorator with no parameters.
      return decoratorFn (target, name, descriptor, []);
    }
    else {
      return function (target, name, descriptor) {
        return decoratorFn (target, name, descriptor, decoratorParams);
      }
    }
  }
}
