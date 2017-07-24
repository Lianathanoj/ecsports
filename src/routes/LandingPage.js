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
import Particles from 'react-particles-js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../global.css';

injectTapEventPlugin();

class LandingPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isTableTennis: true,
          tabValue: "1"
      };
  }

  handleSportsButtonClick = (event) => {
      this.setState({isTableTennis: !this.state.isTableTennis});
  }

  handleTabChange = (value) => {
      this.setState({tabValue: value});
  }

  handleTabSportsChange = (value) => {
      this.setState({
          isTableTennis: !this.state.isTableTennis,
          tabValue: "1"
      });
  }

    render() {
    return (
        <MuiThemeProvider>
            <div>
                <div className="landing-page">
                    <div
                        onMouseOver={this.handleHeaderHover}
                        onMouseLeave={this.handleHeaderLeave}
                        className="header"
                    >
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
                                    color: '#ECECEC',
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
                    <div>
                    {this.state.isTableTennis ?
                        (
                            <Tabs
                                tabItemContainerStyle={{backgroundColor: '#2071FC'}}
                                inkBarStyle={{backgroundColor: '#000000', height: '2.5px'}}
                                value={~~this.state.tabValue > 5 ? "5" : this.state.tabValue}
                                onChange={this.handleTabChange}
                            >
                                <Tab label="About Us" value="1">
                                    <AboutUsRouteTT/>
                                </Tab>
                                <Tab label="Coaching" value="2">
                                    <CoachingRouteTT/>
                                </Tab>
                                <Tab label="Pricing and Membership" value="3">
                                    <MembershipRouteTT/>
                                </Tab>
                                <Tab label="FAQ's" value="4">
                                    <FAQRouteTT/>
                                </Tab>
                                <Tab label="Contact" value="5">
                                    <ContactRouteTT/>
                                </Tab>
                                <Tab onClick={this.handleTabSportsChange} label="Fencing" value="6">
                                </Tab>
                            </Tabs>
                        ) : (
                            <Tabs
                                tabItemContainerStyle={{backgroundColor: '#D83E2C'}}
                                inkBarStyle={{backgroundColor: '#000000', height: '2.5px'}}
                                value={~~this.state.tabValue > 4 ? "4": this.state.tabValue}
                                onChange={this.handleTabChange}
                            >
                                <Tab label="About Us" value="1">
                                    <AboutUsRouteFencing/>
                                </Tab>
                                <Tab label="Coaching" value="2">
                                    <CoachingRouteFencing/>
                                </Tab>
                                <Tab label="Pricing and Times" value="3">
                                    <MembershipRouteFencing/>
                                </Tab>
                                <Tab label="Contact" value="4">
                                    <ContactRouteFencing/>
                                </Tab>
                                <Tab onClick={this.handleTabSportsChange} label="Table Tennis" value="5">
                                </Tab>
                            </Tabs>
                        )
                    }
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default LandingPage;
