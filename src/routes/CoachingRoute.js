import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import amyImage from '../images/amy-action.jpg';
import '../LandingPage.css'

class CoachingRoute extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Coaching Information</h2>
                <Card style={{margin: '0px 50px 50px 50px'}}>
                    <CardText style={{overflow: 'auto'}}>
                        <div>
                            <img className="image" src={amyImage}/>
                            <h2 style={{textAlign: 'left'}}>Amy Feng</h2>
                            <p style={{textAlign: 'left'}}>
                            Amy grew up in China and played table tennis professionally there. She was a part of the
                            China Women's Team in Tianjin, attained top finishes in the Chinese National Championships
                            (2nd, 5th), and was the reigning Tianjin Champion from 1985-1989. Her highest world rank was
                            #26. After moving to the United States, she was a 1996 USA Olympian, has twice been named
                            USATT Athlete of the Year, and is a member of the
                            <a target="_blank" href="http://www.teamusa.org/USA-Table-Tennis/History/Hall-of-Fame/Profiles/Amy-Feng">
                                USATT Hall of Fame.</a>
                            Amy is a four time US Open Champion, four time US Woman's Doubles Champion, and four time
                            US Mixed Doubles Champion. She has also won the 1985 Polish Open.
                            </p>
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default CoachingRoute;