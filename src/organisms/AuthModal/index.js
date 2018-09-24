import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Input, colors} from 'ro-component-library';
import {TiTick} from 'react-icons/lib/ti';

class AuthModal extends Component{
    state = {
        inputValue: '',
        error: false
    }
    handleInputChange(e){
        let value = e.target.value;
        this.setState({
            inputValue: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.inputValue === 'eesdemo')
            return this.props.dispatch({type: 'LOGGED_IN'});
        this.setState({
            inputValue: '',
            error: true
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                error: false
            });
        }, 2000);
    }
    render(){
        return (
            <Modal width="20%">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <div style={{'width': '85%', 'float': 'left'}}>
                    <Input 
                        {...this.state}
                        onBlur={() => this.setState({blurred: true})}
                        onChange={(e) => this.handleInputChange(e)}
                        value={this.state.inputValue}
                        type={'text'}
                        labelText={'Access Code'}
                        autoFocus={true}
                        /> 
                </div>
                <div style={{'right': '0', 'position': 'absolute', 'bottom': '0', 'padding-bottom': '10px', 'text-align': 'center'}}>
                    <span>
                    <Button type={'submit'} primary ghost small onClick={(event) => this.handleSubmit(event)}>
                        <TiTick size={'30px'} style={{'textAlign': 'center', 'color': `${colors.primary}`}}/> 
                    </Button>
                    </span>
                </div>
                </form>
            </Modal>
        )
    }
}
AuthModal = connect()(AuthModal);
export { AuthModal };