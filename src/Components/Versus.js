import React from 'react';
import VersusImage from '../images/versus.png';
import PropTypes from 'prop-types';

const Versus = ({
    selectedSkaterId
}) => {
    if (selectedSkaterId) {
        return null;
    }

    return (
        <img
            alt="Battle of the Mini Pipe"
            className="versus-img"
            src={VersusImage}
        />
    );
};

Versus.propTypes = {
    selectedSkaterId: PropTypes.number,
};

export default Versus;
