import React, {Component} from 'react';
import {Modal, Button, Input, colors} from 'ro-component-library';
import {TiTick} from 'react-icons/lib/ti';


export class AuthModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    getData(){
        this.props.successAuth();
    }
    handleInputChange(e){
        let value = e.target.value;
        this.setState({
            inputValue: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.getData();
    }
    render(){
        return (
            <Modal>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <div style={{'width': '85%', 'float': 'left'}}>
                    <Input 
                        {...this.state}
                        onBlur={() => this.setState({blurred: true})}
                        onChange={(e) => this.handleInputChange(e)}
                        type={'text'}
                        labelText={'Access Code'}
                        autofocus={true} 
                        /> 
                </div>
                <div style={{'right': '0', 'position': 'absolute', 'bottom': '0', 'padding-bottom': '10px', 'text-align': 'center'}}>
                    <span>
                    <Button type={'submit'} primary ghost small onClick={() => this.getData()}>
                        <TiTick size={'30px'} style={{'textAlign': 'center', 'color': `${colors.primary}`}}/> 
                    </Button>
                    </span>
                </div>
                </form>
            </Modal>
        )
    }
}