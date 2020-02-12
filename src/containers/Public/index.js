import React from 'react';
import Button from "../../conponents/Ui/Button";

import './index.scss';

function Public() {
    const buttonClickHandler = () => {
        alert('Button clicked from Public mode');
    };

    return (
        <div className="public">
            <div className="content">
                <Button
                    onClick={buttonClickHandler}
                    title='Click me from Public mode'
                />
            </div>
        </div>
    );
}

export default Public;