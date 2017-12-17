import React from 'react';
import SessionLinksContainer from './title_session_links_container';
import { withRouter, Link } from 'react-router-dom';


class TitleBar extends React.Component {
  render() {
    let color;
    if (this.props.location.pathname === '/') {
      color = '#E9FBFC';
    } else {
      color = 'white';
    }
    const style = {
      backgroundColor: color,
    };
    return (
      <div className="titlebar" style={style}>
        <Link to='/'><h3 id='page-title'>Localize</h3></Link>
        {/* <Switch> */}
        <SessionLinksContainer />
        {/* <ProtectedRoute path="/" component={UserLinks} /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default withRouter(TitleBar);
