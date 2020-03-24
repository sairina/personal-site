import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <a href="https://github.com/sairina"><FontAwesomeIcon className="Footer-links" icon={['fab', 'github']}/></a>
        <a href="https://www.linkedin.com/in/sairina"><FontAwesomeIcon className="Footer-links" icon={['fab', 'linkedin']}/></a>
        <a href="mailto:sairina.merinotsui@gmail.com"><FontAwesomeIcon className="Footer-links" icon={['fas', 'envelope-square']}/></a>
      </div>
    </div>
  );
}

export default Footer;