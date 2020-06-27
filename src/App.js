import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Gallery from './components/gallery/gallery';
import Create from './components/create/create';
import Layout from './components/shared/layout/layout';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/gallery" />
          </Route>
          <Route path="/gallery" component={Gallery} />
          <Route path="/create" component={Create} />
        </Switch>
      </Layout>
  );
}

export default App;
