import React, { Component } from 'react';

class MembershipRoute extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h4>Beginner Group Practice Time</h4>
                <div>5:00 PM to 7:00 PM | Tuesdays and Thursdays</div>
                <div>10:30 AM to 12:30 PM | Saturdays</div>
                <div>Monthly Fee $145</div>

                <h4>Advanced Group Practice Time</h4>
                <div>5:30 PM to 7:30 PM | Mondays, Wednesdays, and Fridays</div>
                <div>10:30 AM to 12:30 PM | Saturdays</div>
                <div>Monthiy Fee $175</div>
            </div>
        );
    }
}

export default MembershipRoute;