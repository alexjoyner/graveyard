import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board/Board';
import {observe} from "./utils/moveKnight";

const rootEl = document.getElementById('root');

observe(knightPosition =>
    ReactDOM.render(
        <Board knightPosition={knightPosition} />,
        rootEl
    )
);