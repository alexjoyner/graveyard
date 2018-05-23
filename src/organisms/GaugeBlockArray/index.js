import React, {Component} from 'react';
import {GaugeBlock, CenteredContent} from 'ro-component-library';
import {cfm, temp, amps, psi} from "./sensorOpts";

class GaugeBlockArray extends Component{
    state = {
        inputs: {}
    } 
    retreiveData(passCode, callback){
        let requestUrl = new Request('https://api.voicir.com');
        fetch(requestUrl)
        .then((response) => response.json())
        .then((myJson) => {
            if(myJson.status === 'Offline')
                return alert('System offline')
            callback(myJson.inputs);
            setTimeout(() => {
            this.retreiveData(passCode, callback);
            }, 10000);
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
                    if(input.unit === 'F') opts = temp;
                    if(input.unit === 'CFM') opts = cfm;
                    if(input.unit === 'A')  opts = amps;
                    if(input.unit === 'PSI')  opts = psi;
                    return <GaugeBlock key={i} id={key} value={input.real} label={input.name} gaugeOpts={opts}></GaugeBlock>
                })}
            </CenteredContent>
        )
    }
  }

export {GaugeBlockArray};
