import React from 'react';
import PropTypes from 'prop-types';

import Message from './message';

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
  data: PropTypes.arrayOf(PropTypes.object)
}

Messages.defaultProps = {
  data: []
}

export default Messages;