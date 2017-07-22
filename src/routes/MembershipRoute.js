import React, { Component } from 'react';

class MembershipRoute extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Membership Benefits</h1>
                    <div>Discounts on private lessons</div>
                    <div>Free open play</div>
                    <div>Free league play</div>
                <h1>Membership Options</h1>
                <h4>Single Membership</h4>
                    <div>$30 per month</div>
                    <div>$150 per six months</div>
                    <div>$240 per year</div>
                <h4>Family Membership</h4>
                    <div>$50 per month</div>
                    <div>$250 per six months</div>
                    <div>$400 per year</div>
            </div>
        );
    }
}

export default MembershipRoute;