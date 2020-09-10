import React, { useEffect } from 'react';
import './App.css';

import CoronaStats from './Components/CoronaStats';

import { connect } from 'react-redux';
import { fetchCases } from './store/actions/coronaActions';

function App(props) {

//   console.log({loading})
//   return (
//     <div className="App">
//       <h1>CORONA STATS:</h1>
//       {!loading ? <CoronaStats /> : <div>...Fetching stats</div>}
//       <CoronaStats />
//     </div>
//   );
// }

const mapStateToProps = state => {
  return{
    confirmedCases: state.statsReducer.confirmedCases,
    recoveredCases: state.statsReducer.recoveredCases,
    deaths: state.statsReducer.deaths,
    isFetching: state.statsReducer.isFetching,
    date: state.statsReducer.date,
    error: state.statsReducer.error
  }
}

export default connect(mapStateToProps, {fetchCases})(App);


