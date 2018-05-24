import React, {Component} from 'react';
import {Modal, Button, Input, colors} from 'ro-component-library';
import {TiTick} from 'react-icons/lib/ti';


export class AuthModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            blurred: false
        }
    }
    getData(){
        console.log('Logging in with: ', this.state);
        setTimeout(() => {
            this.props.successAuth();
        }, 2000);
    }
    handleInputChange(e){
        let value = e.target.value;
        this.setState({
            inputValue: value
        })
    }
    render(){
        return (
            <Modal>
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
                <div style={{'width': '15%', 'right': '0', 'position': 'absolute', 'bottom': '0', 'padding': '10px'}}>
                    <Button type={'submit'} primary ghost small onClick={() => this.getData()}>
                        <TiTick size={'30px'} style={{'textAlign': 'center', 'color': `${colors.primary}`}}/> 
                    </Button>
                </div>
            </Modal>
        )
    }
}