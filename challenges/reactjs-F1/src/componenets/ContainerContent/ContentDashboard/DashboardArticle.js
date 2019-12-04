import React from 'react';

const DashboardArticle = (props) => {
    return (
        <div className="class_article">
            <div>
                <h4>{ props.articleTitle[1].title }</h4>
            </div>
            <div>
                <h4>{ props.articleTitle[2].title }</h4>
            </div>
        </div>
    )
}

export default DashboardArticle;