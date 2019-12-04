import React from 'react';

const DashboardHeadline = (props) => {
    return (
        <div className="class_headline">
            <h1>{ props.headlineTitle[0].title }</h1>
        </div>
    )
}

export default DashboardHeadline;