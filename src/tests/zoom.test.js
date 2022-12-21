import "https://unpkg.com/mocha@5.2.0/mocha.js"; /* globals mocha */
import "https://unpkg.com/chai@4.1.2/chai.js"; /* globals chai */

import * as UserInterface from "/popup/modules/UserInterface.js";

let expectedZoomInLevel = UserInterface.getLastSize(true);
let expectedZoomOutLevel = UserInterface.getLastSize(false);

describe("function: zoomQrCode", function () {
    describe("zoomQrCode()", function () {
        it("zoom in", function () {
            chai.assert.equal(expectedZoomInLevel, 230);
        });

        it("zoom out", function () {
            chai.assert.equal(expectedZoomOutLevel, 200);
        });
    });
});