import React, { Component, Fragment } from 'react';
import Logo from './Logo';
import Timer from './Timer';
import SelectedSkater from './SelectedSkater';
import Skater from './Skater';
import Versus from './Versus';
import {
    getSkaterNames
} from './App.helpers';

const timerInitial = 3;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSkaterId: null,
            skaters: getSkaterNames(),
            winnerSelected: false
        };

        this.onClearSkater = this.onClearSkater.bind(this);
        this.onClickSkater = this.onClickSkater.bind(this);
        this.onSelectWinner = this.onSelectWinner.bind(this);
    }

    onClickSkater(id) {
        this.setState({ selectedSkaterId: id });
    }

    onClearSkater() {
        this.setState({ selectedSkaterId: null });
    }

    onSelectWinner() {
        this.setState({ winnerSelected: true });
    }

    render() {
        return (
            <Fragment>
                {!this.state.selectedSkaterId &&
                    <div className="title-container">
                        {this.state.skaters.map(skater => (
                            <Skater
                                key={skater.id}
                                selectedSkaterId={this.state.selectedSkaterId}
                                onClickSkater={this.onClickSkater}
                                {...skater}
                            />
                        ))}
                        <Versus
                            selectedSkaterId={this.state.selectedSkaterId}
                        />
                    </div>
                }

                <SelectedSkater
                    selectedSkaterId={this.state.selectedSkaterId}
                    skaters={this.state.skaters}
                />

                {this.state.winnerSelected &&
                    <div className="winner-section">WINNER!</div>
                }

                {!this.state.winnerSelected &&
                    <Timer
                        onClearSkater={this.onClearSkater}
                        onSelectWinner={this.onSelectWinner}
                        selectedSkaterId={this.state.selectedSkaterId}
                        timerInitial={timerInitial}

                    />
                }

                {!this.state.selectedSkaterId &&
                    <div className="controls">
                        {this.state.skaters.map((skater, index) => (
                            <button
                                key={skater.id}
                                className="button"
                                onClick={() => {
                                    if (this.state.selectedSkaterId === skater.id) {
                                        this.onClickSkater(null);
                                    } else {
                                        this.onClickSkater(skater.id);
                                    }
                                }}
                            >
                                P{index+1}
                            </button>
                        ))}
                    </div>
                }
                <Logo />
            </Fragment>
        );
    }
}

export default App;
