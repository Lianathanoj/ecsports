import React, { Component } from 'react';

class AboutUsRoute extends Component {
    render() {
        return (
          <div style={{textAlign: 'center'}}>
              <div style={{margin: '0px 200px 0px 200px'}}>
                  <h1>General Information</h1>
                  <div>We offer table tennis coaching services, open play, and league play for all ages and skill levels.
                      Our organized league is every Saturday at 3:00 PM. We also sell equipment and clothing, and we can
                      arrange smaller or specialized events such as private parties or small tournaments. Typically, we
                      do not host USATT sanctioned events.</div>
              </div>
              <div style={{marginBottom: '30px'}}>
                  <h1>Location</h1>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1924.3734731008076!2d-84.493488321495
                  08!3d34.01139995658294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5133c5f550225%3A0xc39eee62
                  91bdf73d!2sEC+Sports!5e0!3m2!1sen!2sus!4v1500768570114" width="600" height="450" frameBorder="0" style={{
                  border: 0}} allowFullScreen></iframe>
              </div>
          </div>
        );
    }
}

export default AboutUsRoute;