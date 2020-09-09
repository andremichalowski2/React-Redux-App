import React from 'react';

import CoronaStat from './CoronaStat';

import { connect } from 'react-redux';

const CoronaStats = () => {
  return(
    <div>
      <h3>CORONA STATS</h3>
        <h3> Test </h3>
        <CoronaStat />
    </div>
  )
}

export default CoronaStats;

// import React from "react";
// import { connect } from "react-redux";
// import Fact from "./Fact";

// function CatFacts(props) {
//   return (
//     <>
//       <h3>Cat Facts</h3>
//       {props.facts.map((fact) => {
//         return <Fact key={fact._id} fact={fact} />;
//       })}
//     </>
//   );
// }

// function mapStateToProps(state) {
//   return {
//     facts: state.facts
//   };
// }

// export default connect(mapStateToProps, {})(CatFacts);
