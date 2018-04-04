import React from 'react';
import PropTypes from 'prop-types';

const WorkspaceList = ({ list }) =>
  <div className="workspace-list">
    <ul>
      {list.map((item, i) =>
        <li key={`wl-${i}`}>
          <span>{item.name}</span>
          <a href={`localhost:3000/${item.url}`}>{`localhost:3000/${item.url}`}</a>
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