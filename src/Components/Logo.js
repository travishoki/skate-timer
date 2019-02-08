import React from 'react';
import LogoImage from '../images/battle-of-the-mini-pipe.png';

const Logo = () => (
    <a href={window.location.href}>
        <img
            alt="Battle of the Mini Pipe"
            className="logo"
            src={LogoImage}
        />
    </a>
);

export default Logo;
