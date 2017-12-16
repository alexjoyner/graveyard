import React from 'react';
import PropTypes from 'prop-types';
import {Knight} from "../Knight/Knight";
import {Square} from "../Square/Square";
import {canMoveKnight, moveKnight} from "../../utils/moveKnight";
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export class Board extends React.Component{
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    };
    handleSquareClick(toX, toY) {
        if(canMoveKnight(toX, toY)){
            moveKnight(toX, toY);
        }
    }
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const isBlack = (x + y) % 2 === 1;

        const [knightX, knightY] = this.props.knightPosition;
        const piece = (x === knightX && y === knightY) ?
            <Knight /> :
            null;

        return (
            <div key={i}
                 style={{ width: '12.5%', height: '12.5%' }}
                 onClick={() => this.handleSquareClick(x, y)}>
                <Square isBlack={isBlack}>
                    {piece}
                </Square>
            </div>
        );
    }
    render(){
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Board);