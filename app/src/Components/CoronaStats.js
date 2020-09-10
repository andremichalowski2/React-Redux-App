// import React from 'react';

// import CoronaStat from './CoronaStat';

// import { connect } from 'react-redux';

// const CoronaStats = ({jokes}) => {
//   console.log('state coming from statS', jokes)
//   return(
//     <div>
//       <h3>Title: CoronaStats Component</h3>
//         <CoronaStat />
//         {jokes.map((j) => {
//           return <CoronaStat joke={j} key={j.id}/>
//         })}
//     </div>
//   )
// }

// function mapStateToProps(state) {
//   // console.log(state)
//   return {
//     jokes: state
//   }
// }

// export default connect(mapStateToProps, {})(CoronaStats);


import React from 'react';

const CoronaStats = (props) => {
    return (
        <div className = 'card'>
        <h2>{props.title}</h2>
        <p className = 'cases'>{props.cases}</p>
        <p className = 'date'>{props.date}</p>
    <p className = 'description'>Number of {props.description} of Corona Virus.</p>
        </div>
    )
}

export default CoronaStats;