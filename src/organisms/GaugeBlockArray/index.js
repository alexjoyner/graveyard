import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GaugeBlock, CenteredContent, getUniqueID, PlainBox} from 'ro-component-library';
import { getCustomData, getEzeData } from './actions';


class GaugeBlockArray extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    getCustomData('AAE599', 'romeo6424')(dispatch); 
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
  multiSelectInput(input, key){
    this.props.dispatch({type: 'MULTISELECT_INPUT', data: {
      input, key
    }});
    setTimeout(() => {
      this.props.dispatch({type: 'MULTISELECT_DESELECT_INPUT', data: key});
    }, 2000)
  }
  render(){
    console.log(this.props);
    const inputs = Object.keys(this.props.inputs);
    return (!inputs.length)? this.renderPlaceholders() : (
      <CenteredContent>
        {inputs.map((key) => {
          let input = this.props.inputs[key];
          console.log('Input: ', input.multiSelected)
          let opts = {
            min: 0,
            max: 100,
          };
          if(input.unit === 'F') opts = this.props.temp;
          if(input.unit === 'CFM') opts = this.props.cfm;
          if(input.unit === 'A')  opts = this.props.amps;
          if(input.unit === 'PSI')  opts = this.props.psi;
          let gaugeVal = input.real;
          if(gaugeVal > opts.max)
            gaugeVal = opts.max;
          if(gaugeVal < opts.min)
            gaugeVal = opts.min;
          return <GaugeBlock 
            {...opts} 
            key={getUniqueID()}
            value={gaugeVal} 
            label={input.name}
            multiSelected={input.multiSelected}
            height={'10vh'}
            onClick={() => this.multiSelectInput(input, key)}></GaugeBlock>
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
