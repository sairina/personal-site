import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <a href="https://github.com/sairina" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="Footer-links" icon={['fab', 'github']}/></a>
        <a href="https://www.linkedin.com/in/sairina" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="Footer-links" icon={['fab', 'linkedin']}/></a>
        <a href="mailto:sairina.merinotsui@gmail.com" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="Footer-links" icon={['fas', 'envelope-square']}/></a>
      {/* <a href="mailto:sairina.merinotsui@gmail.com?subject=Pair%20program%20with%20me" title="Pair program with me!">
  <img  src="http://pairprogramwith.me/badge.png"
        alt="Pair program with me!" />
</a> */}
      </div>
    </div>
  );
}

export default Footer;