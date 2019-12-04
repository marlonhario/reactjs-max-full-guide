import React from 'react';

const menu = (props) => {
    return (
        <div className="menu">
            <h1>Sort by urgency level:</h1>
            <div className="urg_sort">
                <div>
                    <input type="radio" name="sort" value="normal"/>
                    <label>Noraml</label>
                </div>
                <div>
                    <input type="radio" name="sort" value="warning"/>
                    <label>Warning</label>
                </div>
                <div>
                    <input type="radio" name="sort" value="danger"/>
                    <label>Danger</label>
                </div>
            </div>
        </div>
    );
}

export default menu;