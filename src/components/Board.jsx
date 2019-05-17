import React from 'react';

const style = (dimension) => {
    const dim = dimension + 'px';
    return {
        width: dim,
        height: dim,
        border: '5px solid gray',
        position: 'relative',
        margin: '25px auto',
        overflow: 'hidden',
        borderRadius: '5px'
    };
};

export default ({ dimension, children }) => (
    <div style={style(dimension)}>
        {children}
    </div>
)
