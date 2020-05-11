import React, {Component } from 'react';

import axios from 'axios';
class Global extends Component{
    state = {
        globalCases: null,
        globalDeaths: null,
        globalRecovered: null,
        
    }
  
  
    

    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api')
        .then(res => {
            const globalCases = res.data.confirmed.value;
            const globalDeaths = res.data.deaths.value;
            const globalRecovered = res.data.recovered.value;
            this.setState({
                globalCases,
                globalDeaths,
                globalRecovered
            });
            // console.log(res);
            //const { confirmed, deaths } = res.data;
            //console.log('Confirmed:' +  + ' & Deaths:' + res.data.deaths.value + res.data.recovered.value);
        });
    }
    render(){
        console.log(this.state);
        return(
                    <div className = "container row">
                    <div className = "z-depth-5">
                        <div className = "card blue-grey darken-1">
                            <div className = "card-content white-text">
                                        <p className = "center card-title">Globally</p>
                                        <h5>Active Cases: {this.state.globalCases}</h5>
                                        <h5>Recoveries: {this.state.globalRecovered}</h5>
                                        <h5>Deaths: {this.state.globalDeaths}</h5>
                            </div>
                        </div>
                    </div>
                    </div>
       );
    }
}
export default Global;