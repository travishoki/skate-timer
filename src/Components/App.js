import React, { Component, Fragment } from 'react';
import Logo from './Logo';
import Timer from './Timer';
import SelectedSkater from './SelectedSkater';
import Skater from './Skater';
import Versus from './Versus';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSkaterId: null,
            skaters: [
                {
                    id: 1,
                    name: 'Tony'
                },
                {
                    id: 2,
                    name: 'Andy'
                }
            ]
        };

        this.onClearSkater = this.onClearSkater.bind(this);
        this.onClickSkater = this.onClickSkater.bind(this);
    }

    onClickSkater(id) {
        this.setState({ selectedSkaterId: id });
    }

    onClearSkater() {
        this.setState({ selectedSkaterId: null });
    }

    render() {
        return (
            <Fragment>
                <Logo />
                <div className="title-container">
                    {this.state.skaters.map(skater => (
                        <Skater
                            key={skater.id}
                            selectedSkaterId={this.state.selectedSkaterId}
                            onClickSkater={this.onClickSkater}
                            {...skater}
                        />
                    ))}
                </div>
                <Versus
                    selectedSkaterId={this.state.selectedSkaterId}
                />
                <SelectedSkater
                    selectedSkaterId={this.state.selectedSkaterId}
                    skaters={this.state.skaters}
                />
                <Timer
                    onClearSkater={this.onClearSkater}
                    selectedSkaterId={this.state.selectedSkaterId}
                />
            </Fragment>
        );
    }
}

export default App;
