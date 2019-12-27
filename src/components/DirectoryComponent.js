import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {

            destinations: [
                {
                    id: 0,
                    name: 'Orlando, Florida',
                    image: 'assets/images/disney.jpg', 
                    elevation: 1233,
                    description: "Explore toda la magia que Orlando tiene para ofrecer, desde Disney World hasta Universal Studios!"
                },
                {
                  id: 1,
                  name: 'España ',
                  image: 'assets/images/spain1.jpg',
                  elevation: 877,
                  description: "Explore toda la magia que Orlando tiene para ofrecer, desde Disney World hasta Universal Studios!."
                },
                {
                    id: 2,
                    name: 'Portugal',
                    image: 'assets/images/portugal.jpg',
                    elevation: 2901,
                    description: "De Chile a Brasil, ¡hay aventura en todas partes en América del Sur!."
                },
                {
                    id: 3,
                    name: 'República Dominicana',
                    image: 'assets/images/dr.jpg',
                    elevation: 42,
                    description: "Las arenas blancas del Caribe te están llamando, Cuba, República Dominicana y Jamaica."
                },
                {
                    id: 4,
                    name: 'Cuba',
                    image: 'assets/images/cuba.jpg',
                    elevation: 42,
                    description: "Las arenas blancas del Caribe te están llamando, Cuba, República Dominicana y Jamaica."
                },
                {
                    id: 5,
                    name: 'Brazil',
                    image: 'assets/images/brazil.jpg',
                    elevation: 42,
                    description: "Las arenas blancas del Caribe te están llamando, Cuba, República Dominicana y Jamaica."
                },
                {
                    id: 6,
                    name: 'Miami',
                    image: 'assets/images/miami.jpg',
                    elevation: 42,
                    description: "Las arenas blancas del Caribe te están llamando, Cuba, República Dominicana y Jamaica."
                },
                {
                    id: 7,
                    name: 'Chile',
                    image: 'assets/images/chile.jpg',
                    elevation: 42,
                    description: "Las arenas blancas del Caribe te están llamando, Cuba, República Dominicana y Jamaica."
                },
                {
                    id: 8,
                    name: 'Peru',
                    image: 'assets/images/brazil.jpg',
                    elevation: 42,
                    description: "Las arenas blancas del Caribe te están llamando, Cuba, República Dominicana y Jamaica."
                },
                
            ],
        };
        
    }

    render() {
        const directory = this.state.destinations.map(destination => {
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