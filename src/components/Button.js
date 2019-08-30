import React from 'react';
import {Button as BootstrapButton} from 'react-bootstrap';

class Button extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <BootstrapButton variant="primary" className="form-control" onClick={this.props.handler}> {this.props.buttonName} </BootstrapButton>
            </div>
        );
    }
}

export default Button;