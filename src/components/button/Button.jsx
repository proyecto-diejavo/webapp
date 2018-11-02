import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);

class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['purple', 'white', 'greenOk', 'transparent']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    name: '',
    label: 'Continuar',
    disabled: false,
    color: 'purple',
    type: 'submit',
    loading: false,
    loadingText: '',
    onClick: () => {}
  }

  render = () => {
    const {
      label,
      disabled,
      color,
      loading,
      type,
      name,
      className
    } = this.props;
  
    return (
      <button
        name={name}
        disabled={disabled}
        onClick={this.clickHandler}
        className={
          cx('Base', color, className, {
            Disabled: disabled,
            loading
          })
        }
        type={type}
        id={`btn-${name}`}
      >
        {/* { loading && <img alt="loaderIcon" src={commonsImages.purpleLoader} className={styles.loader} /> } */}
        {label}
        {/* {!loading && rightIcon && <span className={cx(rightIcon, 'arrowRight')} />} */}
      </button>
    );
  }
}
export default Button;