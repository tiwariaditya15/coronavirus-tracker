import React, { Component } from 'react';
import axios from 'axios';

class Selector extends Component{
    state = {
        
        confirmed: null,
        deaths: null,
        recovered: null,
        lastUpdated: null

    }
    componentDidUpdate(){
        axios.get('https://covid19.mathdro.id/api/countries/' + this.props.country).then( res => {
                console.log(res.data);
                const confirmed = res.data.confirmed.value;
                const deaths = res.data.deaths.value;
                const recovered = res.data.recovered.value;
                const lastUpdate = res.data.lastUpdate;
                //console.log(confirmed + ' ' + deaths + ' ' + recovered);
                this.setState({
                    confirmed: confirmed,
                    deaths: deaths,
                    recovered: recovered,
                    lastUpdated: lastUpdate
                });
        });
    }
    
    
  

    render(){
        return(
            <div className = "container row">
                <div className = "z-depth-5">
                   <div className = "card blue-grey darken-1">
                            <div className = "card-content white-text">
                                        <p className = "center card-title">{this.props.country}</p>
                                        <h5>Active Cases: {this.state.confirmed}</h5>
                                        <h5>Recoveries: {this.state.recovered}</h5>
                                        <h5>Deaths: {this.state.deaths}</h5>
                                        <h5>Last Updated: {this.state.lastUpdated}</h5>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Selector;