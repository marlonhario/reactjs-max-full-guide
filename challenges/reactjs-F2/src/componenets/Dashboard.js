import React from 'react';

const dashboard = (props) => {
    console.log(props.sort);

    let items = null;
    let count = 0;
    if ( props.items ) {
      items = (
        <div>
          {props.items.map((item, index) => {

            let varData = <ul key={item.id}>
                            <li>{count++}</li>
                            <li><button onClick={() => props.delete(index)}>Delete</button></li>
                            <li>{ item.name }</li>
                            <li>{ item.qty }</li>
                            <li>Level</li>
                            <li><button onClick={() => props.clicked(item.id)}>Update</button></li>
                        </ul>;

            if (item.qty >= 7 && props.sort.normalSort) {
                return varData;
            }

            if (item.qty < 7 && item.qty > 5 && props.sort.warningSort) {
                return varData;
            }
            
            if (item.qty <= 5 && props.sort.dangerSort) {
                return varData;
            }

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
                <li >Update</li>
            </ul>
            { items }
        </div>
    );
}

export default dashboard;