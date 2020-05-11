import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import Global from './components/global';
import Selector from './components/selector';
import covidImage from './covid.svg';
class App extends Component {
   state = {
    selectedCountry: null,
    countries: [ 'India', 'USA', 'United Kingdom', 'China', 'Italy', 'Spain', 'Germany', 'Japan', 
    'Israel', 'Iran', 'South Korea', 'Australia', 'Russia']
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
              <img src={covidImage} alt="corona" class="circle responsive-img"/>
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
