import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GaugeBlock, CenteredContent} from 'ro-component-library';
import { env } from '../../../src/.env';

class GaugeBlockArray extends Component{
    state = {
        inputs: {}
    } 
    retreiveData(passCode, callback){
        let requestUrl = new Request(`${env.serverAddr}/status/AAE599/romeo6424`);
        fetch(requestUrl)
        .then((response) => response.json())
        .then((myJson) => {
            if(myJson.status === 'Offline')
                return alert('System offline')
            callback(myJson.inputs);
        });
    }
    componentDidMount(){
        this.retreiveData('', (data) => {
            this.setState({
                'inputs': data
            })
            this.forceUpdate();
        });
    }
    render(){
        return (
            <CenteredContent>
                {Object.keys(this.state.inputs).map((key, i) => {
                    let input = this.state.inputs[key];
                    let opts = null;
                    if(input.unit === 'F') opts = this.props.temp;
                    if(input.unit === 'CFM') opts = this.props.cfm;
                    if(input.unit === 'A')  opts = this.props.amps;
                    if(input.unit === 'PSI')  opts = this.props.psi;
                    return <GaugeBlock 
                        key={i} 
                        {...opts} 
                        value={input.real} 
                        label={input.name}
                        height={'25vh'}></GaugeBlock>
                })}
            </CenteredContent>
        )
    }
  }

const mapStateToProps = (state) => {
    return {
        ...state.GaugeBlockArrayReducer.defaultOpts
    }
}

GaugeBlockArray = connect(mapStateToProps, null)(GaugeBlockArray)
export {GaugeBlockArray};
