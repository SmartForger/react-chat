
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Creators as CoreActions } from '../core/actions';
import { Creators as ChatActions } from './actions';

import Sidebar from './components/sidebar';
import ChatMain from './components/chat-main';

class Home extends Component {

  componentWillMount() {
    const { setChannels, setDirectChannels } = this.props;

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
  }

  render() {
    const { channels, directChannels, user, logout } = this.props;

    return (
      <div className="chats">
        <Sidebar
          {...{
            channels,
            directChannels,
            user,
            logout
          }}
        />
        <ChatMain />
      </div>
    );
  }

}

const mapStateToProps = ({ chats, user }) => ({
  channels: chats.channels,
  directChannels: chats.directChannels,
  user: user.info
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(CoreActions.setToken('')),
  setChannels: (channels) => {
    dispatch(ChatActions.setChannels(channels))
  },
  setDirectChannels: (directChannels) => {
    dispatch(ChatActions.setDirectChannels(directChannels))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
