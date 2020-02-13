import React from 'react';
import { Link } from 'react-router-dom';

import Button from "../../conponents/Ui/Button";

function Design() {
    return (
        <div className="not-found">
            <div className="content">
                <div>
                    <h1>404</h1>
                </div>
                <Link to="/">
                    <Button
                        type="primary"
                        title="Go to home"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Design;