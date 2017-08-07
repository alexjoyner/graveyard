"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const index_1 = require("./home/index");
react_dom_1.render(React.createElement(index_1.default, null), document.getElementById('ro-app'));
if (module.hot) {
    module.hot.accept('./home/index', () => {
        const Next = require('./home/index').default;
        react_dom_1.render(React.createElement(Next, null), document.getElementById('ro-root'));
    });
}
//# sourceMappingURL=clientDevTarget.js.map