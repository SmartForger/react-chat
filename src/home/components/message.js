import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ avatar, name, formattedTime, msgs }) =>
  <div className="message">
    <div className="avatar">
      <img src={avatar} alt=""/>
    </div>
    <div className="content">
      <div className="headline">
        <span className="name">{name}</span>
        <span className="time">{formattedTime}</span>
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
  formattedTime: PropTypes.string,
  msgs: PropTypes.arrayOf(PropTypes.string)
}

Message.defaultProps = {
  avatar: 'logo.svg',
  name: '',
  formattedTime: '',
  msgs: []
}

export default Message;
