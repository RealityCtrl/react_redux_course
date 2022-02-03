import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  'spring': {
    message : 'Getting warmer',
    icon : 'tree',
  },
  'summer': {
    message : 'Lets hit the beach!',
    icon : 'sun',
  },
  'autumn': {
    message : 'Leaves Are Lovely colour',
    icon : 'leaf',
  },
  'winter': {
    message : 'Burr, it is chilly!',
    icon : 'snowflake',
  },
}

const getSeason = (lat, month) => {
    if(month <3){
      return lat < 0 ? 'summer': 'winter';
    } else if (month >=3 && month <6){
      return lat < 0 ? 'autumn': 'spring';
    } else if (month >=6 && month <9){
      return lat < 0 ? 'winter': 'summer';
    } else {
      return lat < 0 ? 'spring': 'autumn';
    }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {message, icon} = seasonConfig[season]
  return ( 
  <div className={`season-display ${season}`}>
    <i className = {`icon-left massive ${icon} icon`} />
    <h1>{message}</h1>
    <i className = {`icon-right massive ${icon} icon`} />
  </div>);
};

export default SeasonDisplay;
