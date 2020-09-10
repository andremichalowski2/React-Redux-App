import React, { useEffect } from 'react';
import './App.css';

import CoronaStats from './Components/CoronaStats';

import { connect } from 'react-redux';
import { fetchCases } from './store/actions/coronaActions';

function App(props) {

  useEffect((props) => {
    props.fetchCases()

  },[])

  return (
    <div className="App">
      <h1>Corona Virus Global Data</h1>
      <div className ='cardContainer'>
      <div className = 'infected'>
      <CoronaStats 
        title = {'Infected'} 
        description = {'active cases'} 
        // cases = {props.confirmedCases} 
        date = {props.date} />
      </div>
      <div className = 'recovered'>
        <CoronaStats 
          className = 'card recovered' 
          title = {'Recovered'} 
          description = {'recoveries'} 
          cases = {props.recoveredCases} 
          date = {props.date} />
      </div>
      <div className = 'deaths'>
        <CoronaStats 
          className = 'card deaths' 
          title = {'Deaths'} 
          description = {'deaths'} 
          cases = {props.deaths} 
          date = {props.date} />
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    // confirmedCases: state.statsReducer.confirmedCases,
    recoveredCases: state.statsReducer.recoveredCases,
    deaths: state.statsReducer.deaths,
    isFetching: state.statsReducer.isFetching,
    date: state.statsReducer.date,
    error: state.statsReducer.error
  }
}

export default connect(mapStateToProps, {fetchCases})(App);


