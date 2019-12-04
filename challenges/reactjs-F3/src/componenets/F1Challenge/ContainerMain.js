import React, { Component } from 'react';
import ContHeader from './ContainerHeader';
import ContContent from './ContainerContent';
import ContFooter from './ContainerFooter';

class ContainerMain extends Component {
    render() {
        return (
            <div className="class_main">
                <ContHeader />
                <ContContent />
                <ContFooter />
            </div>
        );
    };
}


export default ContainerMain;