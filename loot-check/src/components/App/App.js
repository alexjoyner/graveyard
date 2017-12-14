import React, {Component} from 'react';
import Wallet from '../Wallet/Wallet';
import Loot from '../Loot/Loot';

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Loot Check</h2>
                <hr/>
                <Wallet/>
                <Loot/>
            </div>
        )
    }
}