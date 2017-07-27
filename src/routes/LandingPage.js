import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
          tabValue: "1",
          screenWidth: 0,
          screenHeight: 0,
          isMobileScreen: false,
          open: false
      };
  }

  componentWillMount() {
      this.checkScreenSize();
  }

  componentDidMount() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.checkScreenSize);
  }

  checkScreenSize = () => {
      this.setState({screenWidth: window.innerWidth});
      this.setState({screenHeight: window.innerHeight});
      if (window.innerWidth < 800) {
          this.setState({
              isMobileScreen: true
          });
      } else {
          this.setState({
              isMobileScreen: false
          });
      }
  }

  handleMenuToggle = () => this.setState({open: !this.state.open});

  handleMenuClose = () => this.setState({open: false});

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

  handleMobileSportsButtonClick = () => {
      this.handleSportsButtonClick();
      this.handleMenuClose();
  }

  render() {
    return (
        <MuiThemeProvider>
            <Router>
                <div className="landing-page">
                    <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:500" rel="stylesheet"/>
                    {this.state.isMobileScreen &&
                        <div>
                            <AppBar
                                title="East Cobb Sports"
                                onLeftIconButtonTouchTap={this.handleMenuToggle}
                                style={{backgroundColor: this.state.isTableTennis ? '#2071FC' : '#D83E2C'}}
                            />
                            <Drawer
                                docked={false}
                                width={175}
                                open={this.state.open}
                                onRequestChange={(open) => this.setState({open})}
                            >
                                <MenuItem
                                    onClick={this.handleMenuClose}
                                    containerElement={<Link to="/about" />}
                                >
                                    About Us
                                </MenuItem>
                                <MenuItem
                                    onClick={this.handleMenuClose}
                                    containerElement={<Link to="/coaching" />}
                                >
                                    Coaching
                                </MenuItem>
                                <MenuItem
                                    onClick={this.handleMenuClose}
                                    containerElement={<Link to="/membership" />}
                                >
                                    Membership
                                </MenuItem>
                                {this.state.isTableTennis &&
                                <MenuItem
                                    onClick={this.handleMenuClose}
                                    containerElement={<Link to="/faq" />}
                                >
                                    FAQ's
                                </MenuItem>
                                }
                                <MenuItem
                                    onClick={this.handleMenuClose}
                                    containerElement={<Link to="/contact" />}
                                >
                                    Contact
                                </MenuItem>
                                <MenuItem
                                    onClick={this.handleMobileSportsButtonClick}
                                    containerElement={<Link to="/about" />}
                                >
                                    {this.state.isTableTennis ? "Fencing" : "Table Tennis"}
                                </MenuItem>
                            </Drawer>
                            <Route
                                exact path="/"
                                component={this.state.isTableTennis ? AboutUsRouteTT : AboutUsRouteFencing}
                            />
                            <Route
                                path="/about"
                                component={() => (
                                    this.state.isTableTennis
                                        ? <AboutUsRouteTT
                                            isMobileScreen={this.state.isMobileScreen}
                                            screenWidth={this.state.screenWidth}
                                            screenHeight={this.state.screenHeight}
                                          />
                                        : <AboutUsRouteFencing
                                            isMobileScreen={this.state.isMobileScreen}
                                            screenWidth={this.state.screenWidth}
                                            screenHeight={this.state.screenHeight}
                                          />
                                    )
                                }
                            />
                            <Route
                                path="/coaching"
                                component={this.state.isTableTennis ? CoachingRouteTT : CoachingRouteFencing}
                            />
                            <Route
                                path="/Contact"
                                component={this.state.isTableTennis ? ContactRouteTT : ContactRouteFencing}
                            />
                            <Route
                                path="/faq"
                                component={this.state.isTableTennis ? FAQRouteTT : null}
                            />
                            <Route
                                path="/membership"
                                component={this.state.isTableTennis ? MembershipRouteTT : MembershipRouteFencing}
                            />
                        </div>
                    }
                    {!this.state.isMobileScreen &&
                    <div
                        onMouseOver={this.handleHeaderHover}
                        onMouseLeave={this.handleHeaderLeave}
                        className="header"
                        style={{fontSize: !this.state.isMobileScreen ? '115px' : '60px'}}
                    >
                        <div>
                            <Particles
                                style={{
                                    position: 'absolute',
                                    left: '0px'
                                }}
                                height='170px'
                                params={{
                                    particles: {
                                        "number": {
                                            "value": 55,
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
                                }}
                            />
                            <div className="header-title">
                                East Cobb Sports
                            </div>
                            <div className="header-subtitle">
                                2550 Sandy Plains Road, Suite 230<br/>
                                Marietta, GA 30066
                            </div>
                        </div>
                    </div>
                    }
                    <div>
                    {!this.state.isMobileScreen && (this.state.isTableTennis ?
                        (
                            <Tabs
                                tabItemContainerStyle={{backgroundColor: '#2071FC'}}
                                inkBarStyle={{backgroundColor: '#000000', height: '2.5px'}}
                                value={~~this.state.tabValue > 5 ? "5" : this.state.tabValue}
                                onChange={this.handleTabChange}
                            >
                                <Tab label="About Us" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="1">
                                    <AboutUsRouteTT
                                        screenWidth={this.state.screenWidth}
                                        screenHeight={this.state.screenHeight}
                                    />
                                </Tab>
                                <Tab label="Coaching" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="2">
                                    <CoachingRouteTT isMobileScreen={this.state.isMobileScreen}/>
                                </Tab>
                                <Tab label="Pricing and Membership" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="3">
                                    <MembershipRouteTT/>
                                </Tab>
                                <Tab label="FAQ's" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="4">
                                    <FAQRouteTT/>
                                </Tab>
                                <Tab label="Contact" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="5">
                                    <ContactRouteTT/>
                                </Tab>
                                <Tab onClick={this.handleTabSportsChange} style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} label="Fencing" value="6">
                                </Tab>
                            </Tabs>
                        ) : (
                            <Tabs
                                tabItemContainerStyle={{backgroundColor: '#D83E2C'}}
                                inkBarStyle={{backgroundColor: '#000000', height: '2.5px'}}
                                value={~~this.state.tabValue > 4 ? "4": this.state.tabValue}
                                onChange={this.handleTabChange}
                            >
                                <Tab label="About Us" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="1">
                                    <AboutUsRouteFencing
                                        screenWidth={this.state.screenWidth}
                                        screenHeight={this.state.screenHeight}
                                    />
                                </Tab>
                                <Tab label="Coaching" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="2">
                                    <CoachingRouteFencing/>
                                </Tab>
                                <Tab label="Pricing and Times" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="3">
                                    <MembershipRouteFencing/>
                                </Tab>
                                <Tab label="Contact" style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} value="4">
                                    <ContactRouteFencing/>
                                </Tab>
                                <Tab onClick={this.handleTabSportsChange} style={{whiteSpace: 'normal',
                                    wordWrap: 'break-word'}} label="Table Tennis" value="5">
                                </Tab>
                            </Tabs>
                        ))
                    }
                    </div>
                </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default LandingPage;
