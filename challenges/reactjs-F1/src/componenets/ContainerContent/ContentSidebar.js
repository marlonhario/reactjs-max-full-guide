import React from 'react';

const ContentSidebar = (props) => {
    return (
        <div className="class_sidebar">
            <ul>
                <li>{ props.sidebarTitle[0].title }</li>
                <li>{ props.sidebarTitle[1].title }</li>
                <li>{ props.sidebarTitle[2].title }</li>
                <li>{ props.sidebarTitle[3].title }</li>
                <li>{ props.sidebarTitle[4].title }</li>
            </ul>
        </div>
    )
}

export default ContentSidebar;