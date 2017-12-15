import React from 'react';
import SessionLinksContainer from './title_session_links_container';
import { withRouter, Link } from 'react-router-dom';


const TitleBar = () => (
  <div className="titlebar">
    <Link to='/'><h3 id='page-title'>Localize</h3></Link>
    {/* <Switch> */}
    <SessionLinksContainer />
    {/* <ProtectedRoute path="/" component={UserLinks} /> */}
    {/* </Switch> */}
  </div>
);

export default TitleBar;
