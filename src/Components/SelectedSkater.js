import React from 'react';
import PropTypes from 'prop-types';

const SelectedSkater = ({
    selectedSkaterId,
    skaters,
}) => {
    if (selectedSkaterId === null) {
        return null;
    }

    const skater = skaters.filter(skater => skater.id === selectedSkaterId)[0];

    return (
        <div className="selected-skater">{skater.name}</div>
    );
};

SelectedSkater.propTypes = {
    selectedSkaterId: PropTypes.number,
    skaters: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SelectedSkater;
