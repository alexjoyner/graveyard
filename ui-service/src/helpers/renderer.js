import React from 'react';
import { renderToString} from 'react-dom/server';
import Home from '../pages/Home/Home';
import ContextProvider from './ContextProvider';


export default () => {
    const css = new Set(); // CSS for all rendered React components
    const context = { insertCss: (...styles) => styles.forEach(style => css.add(style._getCss()))};
    const content = renderToString(
        <ContextProvider context={context}>
            <Home />
        </ContextProvider>
    );

    return `
        <html>
            <head>
                <style type="text/css">${[...css].join('')}</style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}