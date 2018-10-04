import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GaugeBlock, CenteredContent} from 'ro-component-library';
import { GaugeBlockArrayNoDataContent } from './particles/GaugeBlockArrayNoDataContent';
import { subscribeToNewPoints } from './actions/subscribeToNewPoints';
import { PointGaugeBlock } from './particles/PointGaugeBlock';
import { PointsSocket } from '../../behaviors/iSocketIO';


class GaugeBlockArray extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    const socketConnection = new PointsSocket();
    subscribeToNewPoints(this.props.points)(dispatch); 
  }
  
  render(){
    const inputs = Object.keys(this.props.inputs);
    return (!inputs.length)? 
      <GaugeBlockArrayNoDataContent /> : (
      <CenteredContent>
        {inputs.map((id) => <PointGaugeBlock key={id} {...this.props} input={this.props.inputs[id]} id={id}/>)}
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
