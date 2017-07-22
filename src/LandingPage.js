import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './LandingPage.css';

injectTapEventPlugin();

class LandingPage extends Component {
  render() {
    return (
            <MuiThemeProvider>
                <div className="landing-page">
                    <div className="header">
                        <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:500" rel="stylesheet"/>
                        East Cobb Sports
                    </div>
                    <Tabs>
                        <Tab label="About Us" >
                            <div>
                                <h2>About Us</h2>
                            </div>
                        </Tab>
                        <Tab label="Coaching" >
                            <div>
                                <h2>Coaching</h2>
                            </div>
                        </Tab>
                        <Tab label="Membership" >
                            <div>
                                <h2>Membership</h2>
                            </div>
                        </Tab>
                        <Tab label="Contact" >
                            <div>
                                <h2>Contact</h2>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
    );
  }
}

export default LandingPage;
