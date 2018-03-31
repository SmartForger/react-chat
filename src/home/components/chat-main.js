import React, { Component } from 'react';
import TextAreaAutosize from 'react-textarea-autosize';

import Messages from './messages';
// import ChatControl from './chat-control';

class ChatMain extends Component {

  handleKeydown = (ev) => {
    if (ev.keyCode === 13 && !ev.shiftKey) {
      console.log('send message');
      ev.preventDefault();
    }
  }

  render() {
    return (
      <div className="chat-main">
        <h1 className="chat-header">
          #Channel
        </h1>
        <Messages />
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

export default ChatMain;
