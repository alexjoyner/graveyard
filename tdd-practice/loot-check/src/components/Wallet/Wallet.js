import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deposit, withdraw } from "./balance/actions"

export class Wallet extends Component {
    constructor(){
        super();
        this.state = {
            balance: null
        }
    }
    updateBalance = event => this.setState({balance: parseInt(event.target.value, 10)});
    deposit = () => this.props.deposit(this.state.balance);
    withdraw = () => this.props.withdraw(this.state.balance);
    render(){
        return (
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
                <br/>
                <input type="text" className="input-wallet" onChange={this.updateBalance}/>
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}

// Tested props here and tested that this component
//  is properly connected in the App component, so we can ignore this as well tested
export default connect(/* istanbul ignore next */state => {return {balance: state.balance}}, {deposit, withdraw})(Wallet);