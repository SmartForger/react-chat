import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ avatar, name, time, msgs }) =>
  <div className="message">
    <div className="avatar">
      <img src={avatar} alt=""/>
    </div>
    <div className="content">
      <div className="headline">
        <span className="name">{name}</span>
        <span className="time">{time}</span>
      </div>
      {msgs && msgs.map((text, i) =>
        <div key={`msgb-${i}`} className="msg-text">
          {text.split('\n').map((line, j) =>
            <div key={`msg-${i}-${j}`}>{line}</div>
          )}
        </div>
      )}
    </div>
  </div>

Message.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  msgs: PropTypes.arrayOf(PropTypes.string)
}

Message.defaultProps = {
  avatar: 'logo.svg',
  name: '',
  time: '',
  msgs: []
}

export default Message;
