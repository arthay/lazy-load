import React from 'react';
//import  Button  from 'react-typography/src/components/Button';

import LeftPanel from '../../conponents/Panel';
import Button from "../../conponents/Ui/Button";

// import './index.scss';

function Design() {
    const buttonClickHandler = () => {
        alert('Button clicked from Design mode');
    };

    return (
        <div className='design'>
            <div className="left-panel">
                <LeftPanel />
            </div>
            <div className="content">
                <Button
                    onClick={buttonClickHandler}
                    type="primary"
                    title="PRIMARY"
                />
            </div>
        </div>
    );
}

export default Design;