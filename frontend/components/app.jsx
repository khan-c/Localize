import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
// import HomePage from './home_page/home_page';
// import SearchPage from './search_page/search_page';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default App;

//
// {/* <Switch>
//   <Route exact path="/company/:symbol" component={HomePage} />
//   <Route path="/account" component={SearchPage} />
//   </Switch> */}
