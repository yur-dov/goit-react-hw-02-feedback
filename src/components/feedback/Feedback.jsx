import React from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Statistics/Notification';

import css from './feedback.module.css'

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0 ,
        total: 0,
    }
    
    clickOnGood = () => {
            this.setState({
                good: this.state.good + 1,
                total:this.state.total +1,
        })
    }
    clickOnNeutral = () => {
        this.setState({
            neutral: this.state.neutral + 1,
            total:this.state.total +1,
    })
    }
    clickOnBad = () => {
        this.setState({
            bad: this.state.bad + 1,
            total:this.state.total +1,
    })
    }

    render() {
        return (
        <div>
                <h1>Please leave feedback</h1>
                
            <div>
                <button className={css} onClick={this.clickOnNeutral}>Neutral</button>
                <button className={css} onClick={this.clickOnGood}>Good</button>
                <button className={css} onClick={this.clickOnBad}>Bad</button>
            </div>
                <h2>Statistics</h2>
                {this.state.total === 0?<Notification message="There is no feedback" /> : <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.state.total}
                     />}
                
        </div>
    )
    }
}
 
export default Feedback;