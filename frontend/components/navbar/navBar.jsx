import React from 'react';
import TitleBar from './title_bar';
import SearchBarWrapper from './search_bar_wrapper';

const style = {
  width: '100%',
  height: '200px',
  border: '1px solid #000000',
  backgroundColor: PURPLE,
};

const Navbar = () => (
  <div className="navbar" style={style}>
    <TitleBar/>
    <SearchBarWrapper/>
  </div>
);

export default Navbar;
