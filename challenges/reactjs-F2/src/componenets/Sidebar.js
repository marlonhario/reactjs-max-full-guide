import React from 'react';

const sidebar = (props) => {
    let submitBtn = null;
    let validate = null;
    let alert = null;
    let upItem = null;
   
    if (props.show) {
        submitBtn = (
            <div className="btn_update">
            <button type="submit">Update</button>
            <button onClick={props.hide}>Cancel</button>
            </div>
        );
        
        upItem = <h4>Update item : {props.getitem}</h4>;

    } else {
        submitBtn = (
            <div className="btn_save">
                <button type="submit">Save</button>
            </div>
        );
    }

    if (props.alreadyx) {
        alert = props.alert.alreadyExist
    } else {
        alert = props.alert.noData
    }

    if (!props.valid || props.alreadyx) {
        validate = (
            <div>
                <h4>{ alert }</h4>
            </div>
        );
    }
    


    return (
        <div className="sidebar_form">
            {validate}
            <form onSubmit={props.submit}>
                <h1>Sidebar</h1>
                {upItem}
                <input id="itemName" type="text" placeholder="Item" onChange={props.item} value={props.getitem} />
                <input id="itemQty" type="number" placeholder="Quantity" onChange={props.qty} value={props.getqty} />
                
                { submitBtn }
            </form>
            
        </div>
    );
}

export default sidebar;