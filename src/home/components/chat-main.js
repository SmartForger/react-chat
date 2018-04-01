import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextAreaAutosize from 'react-textarea-autosize';

import Messages from './messages';

class ChatMain extends Component {

  handleKeydown = (ev) => {
    if (ev.keyCode === 13 && !ev.shiftKey) {
      this.props.send(ev.target.value);
      ev.target.value = '';
      ev.preventDefault();
    }
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="chat-main">
        <h1 className="chat-header">
          #Channel
        </h1>
        <Messages data={messages}/>
        <div className="chat-input">
          <TextAreaAutosize
            maxRows={3}
            onKeyDown={this.handleKeydown}
          />
        </div>
      </div>
    )
  }

}

ChatMain.propTypes = {
  messasges: PropTypes.arrayOf(PropTypes.object),
  send: PropTypes.func,
}

ChatMain.defaultProps = {
  messages: [],
  send: () => {}
}

export default ChatMain;
