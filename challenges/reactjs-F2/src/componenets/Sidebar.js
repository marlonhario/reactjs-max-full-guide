import React from 'react';

const sidebar = (props) => {

    let updateS = null;

    if (props.show) {
        updateS = (
            <div className="btn_update">
            <button>Update</button>
            <button>Cancel</button>
            </div>
        );
    }
    

    return (
        <div className="sidebar_form">
            <h1>Sidebar</h1>
            <input id="itemName" type="text" placeholder="Item" value="item value" />
            <input id="itemQty" type="text" placeholder="Item" />
            <div className="btn_save">
                <button>Save</button>
            </div>
            { updateS }
        </div>
    );
}

export default sidebar;