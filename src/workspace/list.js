import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkspaceList = ({ list }) =>
  <div className="workspace-list">
    <ul>
      {list.map((item, i) =>
        <li key={`wl-${i}`}>
          <span>{item.name}</span>
          <Link to={`/${item.slug}`}>{`localhost:3000/${item.slug}`}</Link>
        </li>
      )}
    </ul>
  </div>

WorkspaceList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

WorkspaceList.defaultProps = {
  list: []
}

export default WorkspaceList;