import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Creators as Actions } from './actions';

class WorkspaceList extends Component {
  constructor(props) {
    super(props);
  }

  sendEmail = () => {
    console.log(this.email.value);
    this.props.sendEmail(this.email.value);
  }

  render() {
    const { list } = this.props;

    return (
      <div className="workspace-list">
        <ul>
          {list.map((item, i) =>
            <li key={`wl-${i}`}>
              <span>{item.name}</span>
              <Link to={`/${item.slug}`}>{`localhost:3000/${item.slug}`}</Link>
            </li>
          )}
        </ul>
        <input
          type="email"
          name="email"
          ref={el => {this.email = el;}}
        />
        <button
          onClick={this.sendEmail}
        >
          Send Email
        </button>
      </div>
    )
  }

}

WorkspaceList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

WorkspaceList.defaultProps = {
  list: []
}

const dispatchToProps = dispatch => ({
  sendEmail: (email) => dispatch(Actions.sendEmailAttempt(email))
})

export default connect(
  null,
  dispatchToProps
)(WorkspaceList);