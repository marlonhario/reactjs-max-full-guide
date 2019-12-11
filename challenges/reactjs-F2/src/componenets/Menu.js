import React from 'react';

const menu = (props) => {
    // console.log(props.sort.normalSort)
    return (
        <div className="menu">
            <h1>Sort by urgency level:</h1>
            <div className="urg_sort">
                <div>
                    <input type="radio" name="sort" value="normal" checked={props.sort.normalSort} onChange={props.change}/>
                    <label>Noraml</label>
                </div>
                <div>
                    <input type="radio" name="sort" value="warning" checked={props.sort.warningSort} onChange={props.change} />
                    <label>Warning</label>
                </div>
                <div>
                    <input type="radio" name="sort" value="danger" checked={props.sort.dangerSort} onChange={props.change} />
                    <label>Danger</label>
                </div>
            </div>
        </div>
    );
}

export default menu;