import React, {Component} from 'react';
import {GaugeBlock, CenteredContent} from 'ro-component-library';

class GaugeBlockArray extends Component{
    state = {}
    componentDidMount(){
        // let request = new XMLHttpRequest();
        // request.open('GET', 'https://ezecontrol.com/api/status.php', true, 'AAE599', 'romeo6424');
        // request.send();
        // request.onreadystatechange = () => {
        //     console.log(request.getAllResponseHeaders())
        // }
        let opts = {
            method: 'GET',
            credintials: 'include'
        }
        let requestUrl = new Request('https://AAE599:romeo6424@ezecontrol.com/api/status.php');
        fetch(requestUrl, opts)
        .then((response) => {
            console.log('Response: ', response);
        })


        // var url = 'https://ezecontrol.com/api/status.php';
        
        // // create digest request object
        // var getRequest = new digestAuthRequest('GET', url, 'AAE599', 'romeo6424');
                
        // // make the request
        // getRequest.request(function(data) { 
        // // success callback
        // // do something with the data
        //     console.log('Data: ', data);
        // },function(errorCode) { 
        // // error callback
        // // tell user request failed
        //     console.log('Err: ', errorCode);
        // });
        this.setState({'value': 1});
    }
    render(){
        return (
            <CenteredContent>
                <GaugeBlock id={1} value={this.state.value} label={'Sensor 1'}></GaugeBlock>
                <GaugeBlock id={2} {...this.state} label={'Sensor 2'}></GaugeBlock>
                <GaugeBlock id={3} {...this.state} label={'Sensor 3'}></GaugeBlock>
                <GaugeBlock id={4} {...this.state} label={'Sensor 4'}></GaugeBlock>
                <GaugeBlock id={5} {...this.state} label={'Sensor 5'}></GaugeBlock>
                <GaugeBlock id={6} {...this.state} label={'Sensor 6'}></GaugeBlock>
                <GaugeBlock id={7} {...this.state} label={'Sensor 7'}></GaugeBlock>
                <GaugeBlock id={8} {...this.state} label={'Sensor 8'}></GaugeBlock>
                <GaugeBlock id={9} {...this.state} label={'Sensor 9'}></GaugeBlock>
            </CenteredContent>
        )
    }
  }

export {GaugeBlockArray};
