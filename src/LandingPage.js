import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import AboutUsRoute from './routes/AboutUsRoute';
import MembershipRoute from './routes/MembershipRoute';
import CoachingRoute from './routes/CoachingRoute';
import ContactRoute from './routes/ContactRoute';
import FAQRoute from './routes/FAQRoute';
import Particles from 'react-particles-js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './global.css';

injectTapEventPlugin();

class LandingPage extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div>
                <div className="landing-page">
                    <div className="header">
                        <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:500" rel="stylesheet"/>
                        <Particles style={{position: 'absolute', left: '0px'}} height='30%' params={{
                            particles: {
                                "number": {
                                    "value": 80,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                    },
                                    "polygon": {
                                        "nb_sides": 5
                                    },
                                    "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 0.5,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 150,
                                    "color": "#ffffff",
                                    "opacity": 0.4,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 6,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            }
                        }}/>
                        <div className="header-title" style={{zIndex: 1}}>East Cobb Sports</div>
                        <div className="header-subtitle">
                            2550 Sandy Plains Road, Suite 230<br/>
                            Marietta, GA 30066
                        </div>
                    </div>
                    <Tabs
                        tabItemContainerStyle={{backgroundColor: '#2071FC'}}
                        inkBarStyle={{backgroundColor: '#000000', height: '2.5px'}}
                    >
                        <Tab label="About Us">
                            <AboutUsRoute/>
                        </Tab>
                        <Tab label="Coaching">
                            <CoachingRoute/>
                        </Tab>
                        <Tab label="Membership">
                            <MembershipRoute/>
                        </Tab>
                        <Tab label="FAQ's">
                            <FAQRoute/>
                        </Tab>
                        <Tab label="Contact">
                            <ContactRoute/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default LandingPage;
