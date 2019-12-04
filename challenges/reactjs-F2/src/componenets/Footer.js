import React from 'react';

const footer = (props) => {
    return (
        <React.Fragment>
            <div onClick={props.sidebarToogle}>
                <h1>Footer</h1>
            </div>
        </React.Fragment>
    );
}

export default footer;