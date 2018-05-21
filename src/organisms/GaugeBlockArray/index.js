import React, {Component} from 'react';
import {GaugeBlock, CenteredContent} from 'ro-component-library';
import {gaugeSettings} from "ro-component-library/src/atoms/Graph/graph-settings/gauge";

class GaugeBlockArray extends Component{
    state = {
        inputs: {}
    }
    componentDidMount(){
        let requestUrl = new Request('http://eze-handler.datalogger-api.53243324.svc.dockerapp.io/api/status');
        fetch(requestUrl)
        .then((response) => response.json())
        .then((myJson) => {
            if(myJson.status === 'Offline')
                return alert('System offline')
            this.setState({
                'inputs': myJson.inputs
            })
            this.forceUpdate();
        });
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
