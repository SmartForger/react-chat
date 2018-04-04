import io from 'socket.io-client';
import { Creators as Actions } from './actions';

export default class ChatSocket {
  constructor(token, dispatch) {
    this.dispatch = dispatch;
    this.token = token;
    this.channel = 'general';
    this.timeout = 10000;
  }

  connect(channel) {
    this.channel = 'general';

    if (this.socket) {
      this.socket.disconnect();
    }

    this.socket = io('http://localhost:8000', { query: "token=" + this.token });
    this.setupSocket();
  }

  reconnect() {
    this.socket.disconnect();
    this.socket.connect();
  }

  setupSocket() {
    this.socket.on('connect_failed', () => {
      this.socket.close();
    });

    this.socket.on('disconnect', () => {
      this.socket.close();
    });

    this.socket.on('receive', (data) => {
      this.dispatch(Actions.addMessages([ data.msg ]));
      this.msgReceived = true;
      this.dispatch(Actions.setSending(false));
    });
  }

  sendMessage(text) {
    this.socket.emit('send', { text });
    this.msgReceived = false;
    this.dispatch(Actions.setSending(true));
    setTimeout(() => {
      if (!this.msgReceived) {
        console.log('Message not received. Reconnecting...');
        this.reconnect();
        this.dispatch(Actions.setSending(false));
      }
    }, this.timeout);
  }

  disconnect() {
    this.socket.disconnect();
    this.socket = null;
  }
}