import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tab.scss';

const cx = classNames.bind(styles);

class Tabs extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['purple', 'white', 'greenOk', 'transparent'])
  }
  static defaultProps = {
    color: 'purple'
  }

  state = {
    activeTabIndex: 0
  }
  componentWillUnmount() {
    this.state.activeTabIndex = 0;
  }

  isFirstTab = (index = null) => (index || this.state.activeTabIndex) === '0';

  isLatsTab = (index = null) => String(this.props.children.length - 1) === (index || this.state.activeTabIndex);

  changeActiveIndex = (index) => {
    this.state.activeTabIndex = index;
    this.forceUpdate();
  };

  renderChildrenWithTabsApiAsProps = () => {
    const { children, color } = this.props;
    return (
      React.Children.map(children, (child, index) => (
        React.cloneElement(child, {
          handleClick: () => this.changeActiveIndex(index),
          firstLi: this.isFirstTab(index),
          lastLi: this.isLatsTab(index),
          tabIndex: index,
          isActive: this.state.activeTabIndex === index,
          color,
          iconClassName: `icon-class-${index}`,
          linkClassName: `link-class-${index}`
        })
      ))
    );
  };

  renderActiveTabContent = () => {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
    return null;
  }

  render() {
    return (
      <div className={cx('tabs')}>
        <ul className="tabs-nav nav navbar-nav navbar-left">
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <div
          className={cx(`${this.isFirstTab() && 'isFirstTab'} ${this.isLatsTab() && 'isLastTab'} tabsActiveContent`)}
        >
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}

export default Tabs;
