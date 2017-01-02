## Browser motion detection demo

#### Overview
A demo using [Diffy.js](https://github.com/maniart/diffyjs) to detect genuine (e.g. avoiding false positives) motion using the computer's camera from the browser.

Depending on your camera, the ambient light and how fidgety you are, you may need to tweak the `threshold` and `sensitivity` values.

And [here's](https://www.adobe.com/devnet/archive/html5/articles/javascript-motion-detection.html) an interesting article about the blend mode diffing technique behind Diffy.

#### Instructions
Run `yarn` or `yarn install` followed by `yarn start` (or the `npm` equivalents) and it will run on `http://localhost:3000`

Run tests with `yarn run test`