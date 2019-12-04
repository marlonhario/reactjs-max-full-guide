import React from 'react';

const containerHeader = (props) => {
    return (
        <div className="class_header">
            <ul>
                <li>{ props.headerTitle[0].title }</li>
                <li>{ props.headerTitle[1].title }</li>
                <li>{ props.headerTitle[2].title }</li>
                <li>{ props.headerTitle[3].title }</li>
            </ul>
        </div>
    )
}

export default containerHeader;