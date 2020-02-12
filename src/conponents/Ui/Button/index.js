import React from "react";
import PropTypes from 'prop-types';

import './index.scss';

function Button(props) {
    const {
        title,
        onClick
    } = props;


    function click(event) {
        if(typeof onClick !== 'function') {
            return false;
        }

        onClick(event);
    }

    return (
        <button
            type="button"
            onClick={click}
            className="button"
        >
            {title}
        </button>
    )

}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    title: 'Click on me',
};


export default Button;