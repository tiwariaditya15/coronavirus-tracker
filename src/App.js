import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import Global from './components/global';
import Selector from './components/selector';
import axios from 'axios';
import covidImage from './covid.svg';
class App extends Component {
   state = {
    selectedCountry: null,
    countries: ['Global']
   }

   componentDidMount(){
          try{
                axios.get('https://restcountries.eu/rest/v2/all')
                .then( res => {

                  const fetchedCountries = res.data.map( country => {
                      return country.name;
                  });
                  
                  const countries = [...fetchedCountries];
                  
                  this.setState({
                    countries: countries
                  });
                  //console.log(fetchedountries);
                
                });

          }catch(err){
                console.log('Logging from catch:' + err.response);
          } 
   }

   handleChange = (e) => {
    let selectedCountry = e.value;
    this.setState({
            selectedCountry: selectedCountry
    });
}
      render(){
        return (
          <div className = "" align = "center">
              <img src={covidImage} alt="corona" class="circle responsive-img rotate"/>
              <div className = "container">
                  <Global />
                  <div class = "container">
                  <h5>
                    Country:<Dropdown options = {this.state.countries} value = {this.state.selectedCountry} onChange = {this.handleChange} placeholder = "Select"/>
                  </h5>
                  </div>
                  <Selector country = {this.state.selectedCountry}/>
              </div>
          </div>
        );
      }
}

export default App;
