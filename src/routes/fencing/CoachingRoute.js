import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import EugenePicture from '../../images/fencing/eugene-coach.jpg';
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
                            <img className="shadow eugene-image" src={EugenePicture} alt="coach eugene"/>
                            <div style={{textAlign: 'left'}}>
                                <h2>Eugene Maksymov, Head Coach</h2>
                                <p>
                                    Eugene Maksymov is an internationally distinguished fencer, coach, and referee from Ukraine, who is
                                    passionate about spreading his love for fencing. His personal achievements include the presitge of being selected
                                    as a member of the Ukranian National Team, achieving the highest possible ranking status in the United
                                    States, and obtaining licensure with the International Fencing Federation to referee.

                                    As the former Turkish National Coach, Eugene has been invited to compete, teach, and referee around the world.
                                    Eugene Maksymov now offers his elite talent and expertise to Atlanta, Georgia.
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