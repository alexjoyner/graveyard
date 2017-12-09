import React, {Component} from 'react';
import './Home.css';
import {Layout} from "../../features/layout";
import 'purecss';

let io;
let socket;
if(typeof window !== 'undefined'){
    io = require('socket.io-client');
    socket = io('http://localhost:3000');
    socket.on('add log', (log) => {
        console.log('Adding Log: ', log);
    })
}


class Home extends Component {
    render() {
        return (
            <div>
                <Layout />
            </div>
        );
    }
}

export default Home;
