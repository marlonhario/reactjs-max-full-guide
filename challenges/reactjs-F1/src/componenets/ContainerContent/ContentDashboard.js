import React from 'react';
import DashboardHeadine from './ContentDashboard/DashboardHeadine';
import DashboardArticle from './ContentDashboard/DashboardArticle';

const ContentDashbard = (props) => {
    return (
        <div className="class_dashboard">
            <DashboardHeadine headlineTitle={props.dashboardTitle} />
            <DashboardArticle articleTitle={props.dashboardTitle} />
        </div>
    )
}

export default ContentDashbard;