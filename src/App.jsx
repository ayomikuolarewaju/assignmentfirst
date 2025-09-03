import React from 'react'
import Counter from './Counter.jsx'
import Home from './Home.jsx'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
     <div>
      <Home/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route exact path="/Counter">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App