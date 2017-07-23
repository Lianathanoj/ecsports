import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import AboutUsRoute from './routes/AboutUsRoute';
import MembershipRoute from './routes/MembershipRoute';
import CoachingRoute from './routes/CoachingRoute';
import ContactRoute from './routes/ContactRoute';
import FAQRoute from './routes/FAQRoute';
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
                    <div className="header-title">East Cobb Sports</div>
                    <div className="header-subtitle">
                        2550 Sandy Plains Road, Suite 230<br/>
                        Marietta, GA 30066
                    </div>
                </div>
                <Tabs>
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
        </MuiThemeProvider>
    );
  }
}

export default LandingPage;
