import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBitcoin} from "../Wallet/bitcoin/actions"

export class Loot extends Component{
    componentDidMount(){
        this.props.fetchBitcoin();
    }
    computeBitcoin(){
        const { bitcoin } = this.props;
        if(Object.keys(bitcoin).length === 0) return '';
        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    }
    render(){
        return(
            <div>
                <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
            </div>
        )
    }
}

// Tested props here and tested that this component
//  is properly connected in the App component, so we can ignore this as well tested
export default connect(/* istanbul ignore next */state => state, {fetchBitcoin})(Loot);