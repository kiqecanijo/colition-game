import React from 'react'



const style = ({ size, position,sprite,direction = null }) => {
    const dim = size + 'px';
    const rotation =
      direction  == 'UP' && 270 ||
      direction  == 'DOWN' && 90 ||
      direction  == 'LEFT' && 180 ||
      0

    return {
        transform:`rotate(${rotation}deg)`,
        width: dim,
        height: dim,
        backgroundImage: `url(${sprite})`,
        backgroundSize: 'contain',
        position: 'absolute',
        top: position.top + 'px',
        left: position.left + 'px',
        transition: 'all 0.1s ease',
        borderRadius: '50%',
    };
};

export default (props) => <div style={style(props)}>{props.children}</div>
