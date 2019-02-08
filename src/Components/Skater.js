import React from 'react';
import PropTypes from 'prop-types';
import {
    getClassName
} from './Skater.helpers';

const Skater = ({
    selectedSkaterId,
    id,
    name,
    onClickSkater,
}) => (
    <div
        className={`
            skater-name-item
            ${getClassName(selectedSkaterId, id)}
        `}
    >
        <div
            className="skater-name"
            onClick={() => {
                if (selectedSkaterId === id) {
                    onClickSkater(null);
                } else {
                    onClickSkater(id);
                }
            }}
        >{name}</div>
    </div>
);

Skater.propTypes = {
    selectedSkaterId: PropTypes.number,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClickSkater: PropTypes.func.isRequired,
};

export default Skater;
