"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("react-hot-loader/patch");
const React = require("react");
const react_dom_1 = require("react-dom");
const index_1 = require("./home/index");
const renderApp = Component => {
    react_dom_1.render(React.createElement(index_1.default, null,
        React.createElement(Component, null)), document.getElementById('ro-root'));
};
renderApp(index_1.default);
if (module.hot) {
    module.hot.accept('./home/index', () => {
        const Next = require('./home/index').default;
        renderApp(Next);
    });
}
//# sourceMappingURL=clientDevTarget.js.map