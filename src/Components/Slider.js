import React, { Component } from 'react';
import Photo from './Photo';

class Slider extends Component {
    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        fetch("https://api.unsplash.com/search/photos?query=canada&client_id=h4lchtnY3_w4aHBAnZHHeHhVScBwgiE_tOC230KimDY&per_page=30")
        .then(response => {
            if (!response.ok) {
                throw Error("Error fetch");
            }
            return response.json()
        .then(allData => {
            this.setState({ photos: allData});
                })
        .catch(err => {
            throw Error(err.message);
               });
            }   
        );
    }

    render() {
        return (
            <section className="app">
                <p>2222</p>
                <Photo photos={this.state.photos} />
            </section>

        );
    }
}

export default Slider