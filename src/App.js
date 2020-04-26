import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import {Layout} from './components/Layout';       // so wrap Layout around all your rendered components below:
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


class App extends Component {
  render() {
  return (
   
    <React.Fragment>
      <NavigationBar />   {/* notice this is outside of the Layout Component*/}
      <Jumbotron />
        <Layout>
          <Router>      {/* so this is props.children from layout*/}
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route path ="/about" component={About} />
                <Route path ="/contact" component={Contact} />
                <Route component={NoMatch} />                               {/* 404 */}
            </Switch>
          </Router>
        </Layout>
    </React.Fragment>

  );
}

}

export default App;
