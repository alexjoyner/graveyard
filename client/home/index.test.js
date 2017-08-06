"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const chai_1 = require("chai");
require("../../test-setup");
const index_1 = require("./index");
const enzyme_1 = require("enzyme");
describe('Home Index', () => {
    let component;
    beforeEach(() => {
        component = enzyme_1.shallow(React.createElement(index_1.default, null));
    });
    xit('Should contain hello world', () => {
        chai_1.expect(component).to.contain('Hello World');
    });
});
//# sourceMappingURL=index.test.js.map