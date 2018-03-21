import React, { Component } from 'react';

class ProtectedRoute extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return this.props.children;
  }

}