import React from 'react';

const button = (props) => (
    <div>
        <button className="btn btn-dark button-size">
            {props.label}
        </button>
    </div>
);

export default button