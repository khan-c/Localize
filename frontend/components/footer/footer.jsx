import React from 'react';
import ReactSVG from 'react-svg';

const Footer = () => (
  <div className='footer'>
    <a href='https://github.com/khan-c/Localize' target='_blank'>
      <ReactSVG
        path='../../assets/images/github-logo.svg'
        className='github-logo'
      />
    </a>
    <div className='contributors footer-section'>
      <h4>
        Contributors
      </h4>
      <a href='https://github.com/avelasco920' target='_blank'>Angelica Velasco</a>
      <a href='https://github.com/khan-c' target='_blank'>Kyle Chen</a>
      <a href='https://github.com/TmNguyen12' target='_blank'>Truong Nguyen</a>
    </div>
    <div className='linkedin footer-section'>
      <h4>
        On Linkedin
      </h4>
      <a href='https://www.linkedin.com/in/truong-nguyen-2821471b/' target='_blank'>Truong Nguyen</a>
      <a href='https://www.linkedin.com/in/kylehchen/' target='_blank'>Kyle Chen</a>
      <a href='https://www.linkedin.com/in/angelica-velasco/' target='_blank'>Angelica Velasco</a>
    </div>
  </div>
);

export default Footer;
