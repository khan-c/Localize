import React from 'react';
import TitleBar from './title_bar';
import SearchBarWrapper from './search_bar_wrapper';

const style = {
  width: '100%',
  backgroundColor: LIGHTEST_BLUE,
};

const Navbar = () => (
  <div className="navbar" style={style}>
    <TitleBar/>
    <SearchBarWrapper/>
  </div>
);

export default Navbar;
