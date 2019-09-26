import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import NotFound from './components/notFound/NotFound';
 
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />

      <Switch>

      <Route path='/' exact component={List}/>
      <Route path='/currency/:id' component={Detail}/>
      <Route component={NotFound}/>
      
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
