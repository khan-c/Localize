import React from 'react';
import TitleBarContainer from './title_bar_container';
import SearchBarWrapper from './search_bar_wrapper';


const Navbar = () => (
  <div className="navbar">
    <TitleBarContainer/>
    <SearchBarWrapper/>
  </div>
);

export default Navbar;
