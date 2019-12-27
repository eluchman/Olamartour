import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {

           
        };
        
    }

    render() {
        const directory = this.props.destinations.map(destination => {
            return (
                <div key={destination.id} className="col">
                    <img src={destination.image} alt={destination.name} />
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;