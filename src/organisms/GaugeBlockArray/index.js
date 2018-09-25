import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GaugeBlock, CenteredContent, getUniqueID, PlainBox} from 'ro-component-library';
import { getPointsLogs } from './actions';


class GaugeBlockArray extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    getPointsLogs(this.props.points)(dispatch); 
  }
  renderPlaceholders(){
    return (
      <CenteredContent>
        <PlainBox height="25vh" width="25%"/>
        <PlainBox height="25vh" width="25%"/>
        <PlainBox height="25vh" width="25%"/>
        <PlainBox height="25vh" width="25%"/>
        <PlainBox height="25vh" width="25%"/>
        <PlainBox height="25vh" width="25%"/>
        <PlainBox height="25vh" width="25%"/>
      </CenteredContent>
    )
  }
  multiSelectInput(input, id){
    this.props.dispatch({type: 'MULTISELECT_INPUT', data: {
      input, id
    }});
    setTimeout(() => {
      this.props.dispatch({type: 'MULTISELECT_DESELECT_INPUT', data: id});
    }, 2000)
  }
  render(){
    const inputs = Object.keys(this.props.inputs);
    return (!inputs.length)? this.renderPlaceholders() : (
      <CenteredContent>
        {inputs.map((id) => {
          let input = this.props.inputs[id];
          let opts = {
            min: 0,
            max: 100,
          };
          if(input.unit === 'F') opts = this.props.temp;
          if(input.unit === 'CFM') opts = this.props.cfm;
          if(input.unit === 'A')  opts = this.props.amps;
          if(input.unit === 'PSI')  opts = this.props.psi;
          if(input.unit === 'in/sec')  opts = this.props.vibration;
          let gaugeVal = input.value;
          if(gaugeVal > opts.max)
            gaugeVal = opts.max;
          if(gaugeVal < opts.min)
            gaugeVal = opts.min;
          return <GaugeBlock 
            {...opts} 
            key={id}
            value={gaugeVal} 
            label={input.name}
            multiSelected={input.multiSelected}
            height={'10vh'}
            onClick={() => this.multiSelectInput(input, id)}></GaugeBlock>
        })}
      </CenteredContent>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        ...state.GaugeBlockArrayReducer
    }
}

GaugeBlockArray = connect(mapStateToProps, null)(GaugeBlockArray)
export {GaugeBlockArray};
