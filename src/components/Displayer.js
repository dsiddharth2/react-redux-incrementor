import React from 'react';

class Displayer extends React.Component {


    render() {
        const displayVar = this.props.value;

        return (
            <div className="col-md-12">
                <div className="text-center padding-custom"> Value : <span> {displayVar} </span> </div>
            </div>
        );
    }
}

export default Displayer;