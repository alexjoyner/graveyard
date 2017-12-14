import React, {Component} from 'react';
import Wallet from '../Wallet/Wallet';
import Loot from '../Loot/Loot';

const App = () => {
    return (
        <div>
            <h2>Loot Check</h2>
            <hr/>
            <Wallet/>
            <Loot/>
        </div>
    )
};

export default App