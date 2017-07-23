import React, { Component } from 'react';
class FAQRoute extends Component {
    render() {
        return (
            <div style={{margin: 'auto', width: '45%', paddingBottom: '50px'}}>
                <div style={{textAlign: 'center'}}>
                    <h1>Frequently Asked Questions</h1>
                    <h4>Do you have an organized league?</h4>
                    <div>
                        There is a weekly league session ever Saturday at 3:00 PM for all ages and skill levels. There
                        may not be league on holidays or USATT tournament days, so feel free to contact us to make sure.
                    </div>
                    <h4>What ages do you coach?</h4>
                    <div>We coach players of any age, but it is usually best if they are at least 6 years of age.</div>
                    <h4>Are there group lessons?</h4>
                    <div>
                        We do offer group lessons at different times during the week. Please check with the front
                        desk for times.
                    </div>
                    <h4>What equipment do you sell?</h4>
                    <div>
                        We offer selections on training balls, tournament balls, rubbers, and paddles, sometimes at
                        discounted prices. If we do not have an item that you want in stock, we can ship it and you
                        can pick it up when it arrives.
                    </div>
                    <h4>Do you sell clothing?</h4>
                    <div>We sell clothing and sportswear. Prices vary depending on selection.</div>
                    <h4>Do you have a robot to practice with?</h4>
                    <div>
                        There is a robot assuming there is a table available. We would prefer to keep robot use
                        to one hour or less.
                    </div>
                    <h4>Do you have tournaments?</h4>
                    <div>
                        We hold smaller and specialized events but do not host USATT tournaments currently.
                    </div>
                    <h4>Can parents leave their children at your club and pick them up after their lesson?</h4>
                    <div>Yes, but note that we are not equipped to provide babysitting or child care services.</div>
                </div>
            </div>
        );
    }
}

export default FAQRoute;