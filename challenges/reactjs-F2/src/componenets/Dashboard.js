import React from 'react';

const dashboard = (props) => {
    console.log(props.items);

    let items = null;
    if ( props.items ) {
      items = (
        <div>
          {props.items.map((item, index) => {
            return  <ul key={item.id}>
                        <li>#</li>
                        <li>Delete</li>
                        <li>{ item.name }</li>
                        <li>{ item.qty }</li>
                        <li>Level</li>
                        <li>Update</li>
                    </ul>;
          })}

         
        </div>
      );
    } else {
        items = (
            <div>
                <p>No data ...</p>
            </div>
        );
    }

    return (
        <div className="dash">
            <h1>Dashboard</h1>
            <ul className="t_head">
                <li>#</li>
                <li>Delete</li>
                <li>Name</li>
                <li>Qty</li>
                <li>Level</li>
                <li>Update</li>
            </ul>
            { items }
        </div>
    );
}

export default dashboard;