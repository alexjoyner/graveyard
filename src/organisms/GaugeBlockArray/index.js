import React, {Component} from 'react';
import {GaugeBlock, CenteredContent} from 'ro-component-library';
import {gaugeSettings} from "ro-component-library/lib/atoms/Graph/graph-settings/gauge";

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
            }, 5000);
        });
    }
    componentDidMount(){
        if(1){
            this.retreiveData('', (data) => {
                this.setState({
                    'inputs': data
                })
                this.forceUpdate();
            });
        }
    }
    render(){
        return (
            <CenteredContent>
                {Object.keys(this.state.inputs).map((key, i) => {
                    let input = this.state.inputs[key];
                    return <GaugeBlock key={i} id={key} value={input.real} label={input.name} gaugeOpts={gaugeSettings}></GaugeBlock>
                })}
            </CenteredContent>
        )
    }
  }

export {GaugeBlockArray};
