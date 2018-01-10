import React from 'react';
import SessionLinksContainer from './title_session_links_container';
import UserLinksContainer from './title_user_links_container';
import { withRouter, Link } from 'react-router-dom';

class TitleBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    let color;
    const Component = this.props.currentUser ?
                          UserLinksContainer :
                          SessionLinksContainer;

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
        <Component />
      </div>
    );
  }
}

export default withRouter(TitleBar);
