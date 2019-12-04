import React from 'react';
import ContentSidebar from './ContainerContent/ContentSidebar';
import ContentDashboard from './ContainerContent/ContentDashboard';

const containerContent = (props) => {
    console.log(props.contentTitle.sidebar);
    return (
        <div className="class_content">
            <ContentSidebar sidebarTitle={ props.contentTitle.sidebar } />
            <ContentDashboard dashboardTitle={ props.contentTitle.dashboard } />
        </div>
    )
}

export default containerContent;