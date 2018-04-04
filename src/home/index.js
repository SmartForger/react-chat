
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Creators as CoreActions } from '../core/actions';
import { Creators as ChatActions } from './actions';
import groupMessages from './selectors';
import Sidebar from './components/sidebar';
import ChatMain from './components/chat-main';
import ChatSocket from './socket';

class Home extends Component {

  componentWillMount() {
    const { setChannels, setDirectChannels, token, getDispatch, getChats } = this.props;

    setChannels([
      {
        id: 'ch_general',
        label: '#general'
      },
      {
        id: 'ch_developers',
        label: '#developers'
      }
    ]);

    setDirectChannels([
      {
        id: 'dm_kks',
        label: 'kks'
      },
      {
        id: 'dm: kms',
        label: 'kms'
      }
    ])

    this.socket = new ChatSocket(token, getDispatch());
    this.socket.connect('general');
    getChats();
  }

  sendChat = (text) => {
    this.socket.sendMessage(text);
  }

  logout = () => {
    this.socket.disconnect();
    this.props.logout();
  }

  render() {
    const {
      channels,
      directChannels,
      messages,
      user,
    } = this.props;

    return (
      <div className="chats">
        <Sidebar
          {...{
            channels,
            directChannels,
            user,
            logout: this.logout
          }}
        />
        <ChatMain
          {...{
            messages,
            send: this.sendChat
          }}
        />
      </div>
    );
  }

}

const mapStateToProps = ({ chats, user }) => ({
  channels: chats.channels,
  directChannels: chats.directChannels,
  messages: groupMessages(chats),
  user: user.info,
  token: user.token
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(CoreActions.setToken('')),
  setChannels: (channels) => {
    dispatch(ChatActions.setChannels(channels))
  },
  setDirectChannels: (directChannels) => {
    dispatch(ChatActions.setDirectChannels(directChannels))
  },
  getChats: () => {
    dispatch(ChatActions.getChatsAttempt());
  },
  getDispatch: () => dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
