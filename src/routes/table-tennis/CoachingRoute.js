import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import amyImage from '../../images/table-tennis/amy-action.jpg';
import '../../global.css'

class CoachingRoute extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', paddingBottom: '50px'}}>
                <h1>Coaching</h1>
                <Card
                    containerStyle={{fontFamily: "'Zilla Slab', 'sans-serif"}}
                    style={{
                        margin: 'auto',
                        width: '70%',
                        backgroundColor: '#f2f2f2',
                        boxShadow: '2px 4px 10px rgba(0,0,0,0.16), 3px 4px 12px rgba(0,0,0,0.23)'
                    }}
                >
                    <CardText style={{overflow: 'auto'}}>
                        <div>
                            <img className="amy-image shadow" src={amyImage} alt="coach amy"/>
                            <div style={{textAlign: 'left'}}>
                                <h2>Amy Feng, Head Coach</h2>
                                <p>
                                Amy grew up in China and played table tennis professionally there. She was a part of the
                                China Women's Team in Tianjin, attained top finishes in the Chinese National Championships
                                (2nd, 5th), and was the reigning Tianjin Champion from 1985-1989. Her highest world rank was
                                #26. After moving to the United States, she was a 1996 USA Olympian, has twice been named
                                USATT Athlete of the Year, and is a member of the <a target="_blank" href="http://www.teamusa.org/USA-Table-Tennis/History/Hall-of-Fame/Profiles/Amy-Feng">
                                USATT Hall of Fame.</a> Amy is a four time US Open Champion, four time US Woman's Doubles
                                Champion, and four time US Mixed Doubles Champion. She has also won the 1985 Polish Open.
                                </p>
                            </div>
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default CoachingRoute;