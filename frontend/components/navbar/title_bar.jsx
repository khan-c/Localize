import React from 'react';
import SessionLinksContainer from './title_session_links_container';


const TitleBar = () => (
  <div className="titlebar">
    <h2>Localize</h2>
    {/* <Switch> */}
      <SessionLinksContainer />
      {/* <ProtectedRoute path="/" component={UserLinks} /> */}
    {/* </Switch> */}
  </div>
);

export default TitleBar;
