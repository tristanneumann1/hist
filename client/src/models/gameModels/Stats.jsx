import React from 'react';
import styles from '../../styles/game.css';

// class Stats extends React.Component {
//   render() {
//     return (
//       <span className={styles.stats}>
//         {`Stats here`}
//       </span>
//     );
//   }
// }

function findPM(deltas) {
  return deltas ? Math.floor((deltas['0-10'] + deltas['10-20']) / 0.02) / 100 : 'NaN';
}

const Stats = props => (
  <div>
    {`Gold Per Minute @ 20min: ${findPM(props.timeline.goldPerMinDeltas)}`}
    <br />
    {`CS Per Minute @ 20min: ${findPM(props.timeline.creepsPerMinDeltas)}`}
    <br />
    {`Damage per minute: ${props.DPM}`}
    <br />
    {`Kill participation: ${props.KP}`}
  </div>
);

export default Stats;
