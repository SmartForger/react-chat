import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';

class Dropdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ddOpen: false
    }
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      ddOpen: !prevState.ddOpen
    }))
  }

  render() {
    const { arrowDir, items, label, showArrow } = this.props;
    const { ddOpen } = this.state;

    const isArrowDown =
      (arrowDir === 'down' && !ddOpen) ||
      (arrowDir === 'up' && ddOpen);

    return (
      <div className="dropdown">
        <div
          className="dd-header"
          onClick={this.toggleDropdown}
        >
          <span className="label">{label}</span>
          {showArrow &&
            <span className="arrow">
              {isArrowDown
                ? <Ionicon icon="ios-arrow-down" color="white"/>
                : <Ionicon icon="ios-arrow-up" color="white"/>}
            </span>}
        </div>
        {ddOpen &&
          <div className="dd-content">
            {items.map((item, i) =>
              <div
                key={`${item.label}-${i}`}
                className="dd-item"
                onClick={item.handler || null}
              >
                {item.label}
              </div>
            )}
          </div>
        }
      </div>
    )
  }
}

Dropdown.propTypes = {
  arrowDir: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  showArrow: PropTypes.bool,
}

Dropdown.defaultProps = {
  label: 'Label',
  items: [],
  arrowDir: 'down',
  showArrow: false
}

export default Dropdown;