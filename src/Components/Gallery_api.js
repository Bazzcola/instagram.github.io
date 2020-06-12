import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import posts from './posts.png';
import tagged from './tagged.png';


export default class Gallery_api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

        componentDidMount() {
            fetch("https://api.unsplash.com/search/photos?query=canada&client_id=h4lchtnY3_w4aHBAnZHHeHhVScBwgiE_tOC230KimDY&per_page=30")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        }
        
        render() {
            const {error, isLoaded, items} = this.state;
            if (error) {
                return <p> Error {error.message}</p>
            } else {
                return (
                    <Container>
                        <div className="poppup_slider">
                            <div className="slider_title">
                                <div className="posts">
                                    <img
                                        src={posts}
                                        height="20"
                                        width="20"
                                        className="posts_img"
                                        alt="" 
                                    />
                                    <p>POSTS</p>
                                </div>
                                <div className="tagged">
                                    <img
                                        src={tagged}
                                        height="20"
                                        width="20"
                                        className="tagged_img"
                                        alt="" 
                                    />
                                    <p>TAGGED</p>
                                </div>
                            </div>
                            {items.map(item => (
                                <div className="photo">
                                    <a href="/"><img src={item.urls.regular} /></a>
                                </div>
                            ))}
                        </div>
                    </Container>    
                )
            }
        }
 
}