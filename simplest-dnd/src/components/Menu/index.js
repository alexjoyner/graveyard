import React, {Component} from 'react';
import Box from "../Box/index";
import {ItemTypes} from "../../utils/itemTypes";

export class Menu extends Component{
    constructor(){
        super();
        this.state = {
            selection: ['Temp', 'CFM']
        }
    }
    render(){
        return (
            <div>
                {this.state.selection.map((item, i) => {
                    return <Box key={i} type={item}/>
                })}
            </div>
        )
    }
}