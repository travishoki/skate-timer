import React, { Component, Fragment } from 'react';
import Logo from './Logo';
import Timer from './Timer';
import SelectedSkater from './SelectedSkater';
import Skater from './Skater';
import Versus from './Versus';

const getNamesFromUrl = () => {
    const url = window.location.href;

    const regex = /http:\/\/localhost:3000\/(.*)/;
    let urlNames = url.match(regex)[1];

    if (urlNames === '') {
        return 'Milo/Milo';
    }

    return urlNames;
};

const getSkaterNames = () => getNamesFromUrl()
    .split('/')
    .map((urlPart, index) => ({
        id: (index + 1),
        name: urlPart
    }));

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
                <Logo />
            </Fragment>
        );
    }
}

export default App;
