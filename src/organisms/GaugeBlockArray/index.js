import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GaugeBlock, CenteredContent, getUniqueID, PlainBox} from 'ro-component-library';
import { env } from '../../../src/.env';
import { ShowHistoryGraph } from '../HistoricalGraphModal/actions';

const GetData = (username, pass) => {
  return async (dispatch) => {
    try {
      const requestUrl = new Request(`${env.serverAddr}/status/${username}/${pass}`);
      const response = await fetch(requestUrl);
      const myJson = await response.json();
      if(myJson.status === 'Offline')
        return alert('System offline');
      dispatch({
        type: 'NEW_INPUTS',
        data: myJson
      });
    }
    catch(e) {
      console.error(e);
    }
  }
}

class GaugeBlockArray extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    GetData('AAE599', 'romeo6424')(dispatch);
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
  render(){
    console.log(this.props);
    const inputs = Object.keys(this.props.inputs);
    return (!inputs.length)? this.renderPlaceholders() : (
      <CenteredContent>
        {inputs.map((key) => {
          let input = this.props.inputs[key];
          let opts = null;
          if(input.unit === 'F') opts = this.props.temp;
          if(input.unit === 'CFM') opts = this.props.cfm;
          if(input.unit === 'A')  opts = this.props.amps;
          if(input.unit === 'PSI')  opts = this.props.psi;
          return <GaugeBlock 
            {...opts} 
            key={getUniqueID()} 
            value={input.real} 
            label={input.name}
            height={'10vh'}
            onClick={() => ShowHistoryGraph('', '')(this.props.dispatch)}></GaugeBlock>
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
