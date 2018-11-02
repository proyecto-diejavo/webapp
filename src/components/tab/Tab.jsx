import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Tab.scss';

const cx = classNames.bind(styles);

class Tab extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    firstLi: PropTypes.bool.isRequired,
    lastLi: PropTypes.bool.isRequired,
    tabName: PropTypes.string,
    iconClassName: PropTypes.string,
    linkClassName: PropTypes.string,
    color: PropTypes.oneOf(['purple', 'white', 'greenOk', 'transparent']),
    handleClick: PropTypes.func
  }

  static defaultProps = {
  }

  getName = tabName => ((typeof tabName === 'object') ? tabName.name : tabName);
  render() {
    const { isActive, linkClassName, iconClassName, tabName, firstLi, lastLi, color, handleClick } = this.props;
    const tabColor = isActive ? { color } : {};
    return (
      <li className={cx({ firstLi, lastLi, isActive })} style={tabColor}>
        <a
          className={`tab-link ${linkClassName}`}
          onClick={handleClick}
        >
          {this.getName(tabName)} <i className={`tab-icon ${iconClassName}`} />
        </a>
      </li>
    );
  }
}

export default Tab;
