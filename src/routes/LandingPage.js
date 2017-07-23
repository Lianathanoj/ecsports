import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import AboutUsRouteTT from './table-tennis/AboutUsRoute';
import MembershipRouteTT from './table-tennis/MembershipRoute';
import CoachingRouteTT from './table-tennis/CoachingRoute';
import ContactRouteTT from './table-tennis/ContactRoute';
import FAQRouteTT from './table-tennis/FAQRoute';
import AboutUsRouteFencing from './fencing/AboutUsRoute';
import MembershipRouteFencing from './fencing/MembershipRoute';
import CoachingRouteFencing from './fencing/CoachingRoute';
import ContactRouteFencing from './fencing/ContactRoute';
import FAQRouteFencing from './fencing/FAQRoute';
import Particles from 'react-particles-js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../global.css';

injectTapEventPlugin();

class LandingPage extends Component {
  constructor(props) {
      super(props);
      this.state = { isTableTennis: true };
  }

  handleSportsButtonClick = (event) => {
      this.setState({ isTableTennis: !this.state.isTableTennis});
  }

  render() {
    return (
        <MuiThemeProvider>
            <div>
                <div className="landing-page">
                    <div className="header">
                        <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:500" rel="stylesheet"/>
                        <Particles style={{position: 'absolute', left: '0px'}} height='200px' params={{
                            particles: {
                                "number": {
                                    "value": 50,
                                    "density": {
                                        "enable": false,
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
                                    "speed": 1,
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
                        <div className="header-title">
                            East Cobb Sports
                            <FlatButton
                                onClick={this.handleSportsButtonClick}
                                labelStyle={{
                                    fontSize: '60px',
                                    fontFamily: "'Zilla Slab', 'sans-serif'",
                                    textTransform: 'capitalize',
                                    color: 'white',
                                    position: 'relative',
                                    bottom:'5px'
                                }}
                                style={{height: '60px'}}
                                label={this.state.isTableTennis ? "Table Tennis" : "Fencing"}
                            />
                        </div>
                        <div className="header-subtitle">
                            2550 Sandy Plains Road, Suite 230<br/>
                            Marietta, GA 30066
                        </div>
                    </div>
                    {this.state.isTableTennis ?
                        (
                            <Tabs
                                tabItemContainerStyle={{backgroundColor: '#2071FC'}}
                                inkBarStyle={{backgroundColor: '#000000', height: '2.5px'}}
                            >
                                <Tab label="About Us">
                                    <AboutUsRouteTT/>
                                </Tab>
                                <Tab label="Coaching">
                                    <CoachingRouteTT/>
                                </Tab>
                                <Tab label="Membership">
                                    <MembershipRouteTT/>
                                </Tab>
                                <Tab label="FAQ's">
                                    <FAQRouteTT/>
                                </Tab>
                                <Tab label="Contact">
                                    <ContactRouteTT/>
                                </Tab>
                            </Tabs>
                        ) : (
                            <Tabs
                                tabItemContainerStyle={{backgroundColor: '#D83E2C'}}
                                inkBarStyle={{backgroundColor: '#000000', height: '2.5px'}}
                            >
                                <Tab label="About Us">
                                    <AboutUsRouteFencing/>
                                </Tab>
                                <Tab label="Coaching">
                                    <CoachingRouteFencing/>
                                </Tab>
                                <Tab label="Membership">
                                    <MembershipRouteFencing/>
                                </Tab>
                                <Tab label="FAQ's">
                                    <FAQRouteFencing/>
                                </Tab>
                                <Tab label="Contact">
                                    <ContactRouteFencing/>
                                </Tab>
                            </Tabs>
                        )
                    }
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default LandingPage;
