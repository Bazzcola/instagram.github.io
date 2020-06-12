import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import ebs from './ebs.jpg'
import triungle from './triungle.png'
import heart from './heart.png'
import mac from './mac.png'
import micro from './micro.png'
import play from './play.png'
export default class Header_middle extends Component {
    render() {
        return (
            <div className="header_middle_content">

                <Container>
                    <div className="header_middle">
                        <img
                            src={ebs}
                            height="200"
                            width="250"
                            className="ebs_logotype"
                            alt=""
                        />
                        <div className="information">
                            <div className="info_block_1">
                                <div className="information_title">
                                    <p>ebsintegrator</p>
                                </div>
                                <Button type="Button" className="button_subscribe">Подписаться</Button>
                                <Button type="Button" className="button_arrow">
                                    <img
                                        src={triungle}
                                        height="10"
                                        width="10"
                                        className="triungle"
                                        alt="" 
                                    />
                                </Button>
                                <div className="points">
                                    <div className="point"></div>
                                    <div className="point"></div>
                                    <div className="point"></div>
                                </div>
                            </div>
                            <div className="info_block_2">
                                <div className="publish">
                                    <h4>103</h4>
                                    <p>публикаций</p>
                                </div>
                                <div className="publish">
                                    <h4>174</h4>
                                    <p>подписчиков</p>
                                </div>
                                <div className="publish">
                                    <h4>180</h4>
                                    <p>подписок</p>
                                </div>    
                            </div>
                            <div className="info_block_3">
                                <h1>EBS Integrator</h1>
                                <ul className="ebs_option">
                                    <li>MVP Builds</li>
                                    <li>Feature Web and Mobile Production</li>
                                    <li>Application Refactoring</li>
                                    <li>System Redesign</li>
                                </ul>
                                <a className="link_ebs" href="https://ebs-integrator.com/">ebs-integrator.com</a>
                            </div>
                        </div>
                        <div className="circles">
                            <div className="circle">
                                <img
                                        src={mac}
                                        height="20"
                                        width="20"
                                        className="mac"
                                        alt="" 
                                    />
                                <p className="circle_text">Inside EBS</p></div>
                            <div className="circle">
                                <img
                                        src={micro}
                                        height="20"
                                        width="20"
                                        className="micro"
                                        alt="" 
                                    />
                                <p className="circle_text">Party</p></div>
                            <div className="circle">
                                <img
                                        src={play}
                                        height="20"
                                        width="20"
                                        className="play"
                                        alt="" 
                                    />
                                <p className="circle_text">Events</p></div>
                            <div className="circle">
                                <img
                                        src={heart}
                                        height="20"
                                        width="20"
                                        className="heart"
                                        alt="" 
                                    />
                                <p className="circle_text">EBS people</p></div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}