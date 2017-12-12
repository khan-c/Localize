import React from 'react';
import SessionLinksContainer from './title_session_links_container';

const style = {
  titleBar: {
    backgroundColor: LIGHTEST_BLUE,
    height: '65px',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  projectName: {

  }
};

const TitleBar = () => (
  <div className="title-bar" style={style.titleBar}>
    <h2 style={style.projectName}>Localize</h2>
    {/* <Switch> */}
      <SessionLinksContainer />
      {/* <ProtectedRoute path="/" component={UserLinks} /> */}
    {/* </Switch> */}
  </div>
);

export default TitleBar;
