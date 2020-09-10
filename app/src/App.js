import React from 'react';
import './App.css';

import CoronaStats from './Components/CoronaStats';

import { connect } from 'react-redux';

function App({ loading }) {
  console.log({loading})
  return (
    <div className="App">
      <h1>CORONA STATS:</h1>
      {!loading ? <CoronaStats /> : <div>...Fetching stats</div>}
      <CoronaStats />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, {})(App);


