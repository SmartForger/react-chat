import React from 'react';
import PropTypes from 'prop-types';

import Message from './message';

import data from './sample-data';

const Messages = ({ data }) =>
  <div className="messages">
    {data.map((dailyData, i) =>
      <div key={`date-${i}`}>
        <div className="date-line">
          <span>{dailyData.date}</span>
        </div>
        {dailyData.messages.map((message, j) =>
          <Message key={`c-${i}-${j}`} {...message}/>
        )}
      </div>
    )}
  </div>

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
}

Messages.defaultProps = {
  data: data
}

export default Messages;