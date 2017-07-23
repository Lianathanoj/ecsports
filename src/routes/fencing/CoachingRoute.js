import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import amyImage from '../../images/amy-action.jpg';
import '../../global.css'

class CoachingRoute extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Coaches</h1>
                <Card containerStyle={{fontFamily: "'Zilla Slab', 'sans-serif"}} style={{margin: 'auto', width: '70%'}}>
                    <CardText style={{overflow: 'auto'}}>
                        <div>
                            {/*<img className="amy-image shadow" src={amyImage} alt="coach amy"/>*/}
                            <div style={{textAlign: 'left'}}>
                                FENCING
                            </div>
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
                                    <pre>&nbsp;&nbsp;</pre>
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