import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    getTimerCountTimerText
} from './Timer.helpers';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timerText: '',
            counting: false,
        };

        this.rollEndText = this.rollEndText.bind(this);
        this.rollGetReadyText = this.rollGetReadyText.bind(this);
        this.rollTimerTimerText = this.rollTimerTimerText.bind(this);
    }

    rollGetReadyText() {
        this.setState({ counting: true });

        const textArray = [
            "Ready",
            "Set",
            "Go!"
        ];

        let textArrayCounter = 0;
        this.setState({ timerText: textArray[0] });

        let timer = setInterval(() => {
            textArrayCounter += 1;

            const timerText = textArray[textArrayCounter]
            this.setState({ timerText: timerText });


            if (textArrayCounter >= textArray.length) {
                clearInterval(timer);
                this.rollTimerTimerText();
            }
        }, 750);
    }

    rollTimerTimerText() {
        let timerCount = this.props.timerInitial;
        let timerText = getTimerCountTimerText(timerCount);

        this.setState({
            timerText: timerText,
            counting: true
        });

        let timer = setInterval(() => {
            timerCount -= 1;

            timerText = getTimerCountTimerText(timerCount);
            this.setState({ timerText: timerText });

            if (timerCount <= 0) {
                this.rollEndText();
                clearInterval(timer);
            }
        }, 1000);
    }

    rollEndText() {
        this.setState({
            timerText: 'Time!',
        });

        let timer = setInterval(() => {
            this.setState({ counting: false });
            this.props.onClearSkater();
            clearInterval(timer);
        }, 1000);
    }

    render() {
        if (!this.props.selectedSkaterId) {
            return null;
        }

        return (
            <Fragment>
                {this.state.counting ? (
                    <p className="timer-label">{this.state.timerText}</p>
                ) : (
                    <div className="controls">
                        <button
                            className="button"
                            onClick={this.rollGetReadyText}
                        >Battle</button>
                        <button
                            className="button"
                            onClick={this.props.onSelectWinner}
                        >Winner</button>
                    </div>
                )}
            </Fragment>
        );
    }
};

Timer.propTypes = {
    onClearSkater: PropTypes.func.isRequired,
    onSelectWinner: PropTypes.func.isRequired,
    selectedSkaterId: PropTypes.number,
    timerInitial: PropTypes.number.isRequired,
};

export default Timer;
