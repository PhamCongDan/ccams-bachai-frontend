import React from 'react';
import PropTypes from 'prop-types';

const BaseIcon = (props) => {
  const { height, width, viewBox, iconColor, children } = props;
  return (
    <svg
		  height={height}
		  width={width}
		  xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    role="presentation"
	>
    <g fill={iconColor}>
      {children}
    </g>
	</svg>
  )
}

BaseIcon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  iconColor: 'currentColor'
}

const propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
  viewBox: PropTypes.string,
  iconColor: PropTypes.string,
}
BaseIcon.propTypes = propTypes;
export default BaseIcon;
