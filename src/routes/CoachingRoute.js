import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import amyImage from '../images/amy-action.jpg';
import '../LandingPage.css'

class CoachingRoute extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Coaches</h1>
                <Card style={{margin: '0px 200px 0px 200px'}}>
                    <CardText style={{overflow: 'auto'}}>
                        <div>
                            <img className="amy-image" src={amyImage}/>
                            <h2 style={{textAlign: 'left'}}>Amy Feng, Head Coach</h2>
                            <p style={{textAlign: 'left'}}>
                            Amy grew up in China and played table tennis professionally there. She was a part of the
                            China Women's Team in Tianjin, attained top finishes in the Chinese National Championships
                            (2nd, 5th), and was the reigning Tianjin Champion from 1985-1989. Her highest world rank was
                            #26. After moving to the United States, she was a 1996 USA Olympian, has twice been named
                            USATT Athlete of the Year, and is a member of the <a target="_blank" href="http://www.teamusa.org/USA-Table-Tennis/History/Hall-of-Fame/Profiles/Amy-Feng">
                            USATT Hall of Fame.</a> Amy is a four time US Open Champion, four time US Woman's Doubles
                            Champion, and four time US Mixed Doubles Champion. She has also won the 1985 Polish Open.
                            </p>
                        </div>
                    </CardText>
                </Card>
                <div style={{marginBottom: '50px'}}>
                    <h1>Pricing for Private Lessons</h1>
                    <table style={{margin: 'auto'}}>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Non-member</h4>
                                    <div>$60 / hour</div>
                                    <div><pre>&nbsp;</pre></div>
                                </td>
                                <td>
                                    <pre>&nbsp;&nbsp;&nbsp;&nbsp;</pre>
                                </td>
                                <td>
                                    <h4>Member</h4>
                                    <div>$50 / hour</div>
                                    <div>$45 / hour for four lessons</div>
                                    <div>$40 / hour for eight lessons</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CoachingRoute;