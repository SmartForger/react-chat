import io from 'socket.io-client';
import { Creators as Actions } from './actions';

export default class ChatSocket {
  constructor(token, dispatch) {
    this.socket = io('http://localhost:8000', { query: "token=" + token });
    this.dispatch = dispatch;

    this.setupSocket();
  }

  setupSocket() {
    this.socket.on('connect_failed', () => {
      this.socket.close();
    });

    this.socket.on('disconnect', () => {
      this.socket.close();
    });

    this.socket.on('receivemsg', (data) => {
      this.dispatch(Actions.addMessages([ data.msg ]));
    });
  }

  sendMessage(text) {
    this.socket.emit('sendchat', text);
  }

  disconnect() {
    this.socket.disconnect();
  }
}