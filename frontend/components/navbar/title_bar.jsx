import React from 'react';
import SessionLinksContainer from './title_session_links_container';
import UserLinksContainer from './title_user_links_container';

class TitleBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const Component = this.props.currentUser ? UserLinksContainer : SessionLinksContainer;

    return (
      <div className="titlebar">
        <h3>Localize</h3>
        {/* <Switch> */}
        <Component />
        {/* <ProtectedRoute path="/" component={UserLinks} /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default TitleBar;
