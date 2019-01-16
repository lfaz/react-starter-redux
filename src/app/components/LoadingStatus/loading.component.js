import React from 'react';
import './loading.style.scss';

class LoadingComponent extends React.Component {
    render() {
        console.log(this.props.isLoading);
        return (
            this.props.isLoading === true ?
                <div className="LoadingComponent">Loading Component </div> :
                ''
        );
    }
}

export default LoadingComponent;
