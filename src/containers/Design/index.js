import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPage, addPage } from '../../shared/store/actions/page';
import LeftPanel from '../../conponents/Panel';
import Button from "../../conponents/Ui/Button";

function Design() {
    const { alias } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchPage() {
            const page = await getPage(alias || '');
            dispatch(addPage(page));
        }

        fetchPage();
    }, [dispatch]);

    const page = useSelector(state => state.pageReducer.page);

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