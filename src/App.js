// import logo from './logo.svg';
import Navbar from './navbar';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import React_fun from './react';
import Node_fun from './node';
import Angular_fun from './angular';
/**
 * this program is about routing of react how it shows different components without reloading
 * @returns 
 */
function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
         <Route path="/react"  exact component={React_fun}/>
         <Route path="/angular" exact component={Angular_fun}/>
         <Route path="/node" exact component={Node_fun}/>
         {/* <Route path="/"   element={<React_fun/>}/>
         <Route path="/angular"  element={<Angular_fun/>}/>
         <Route path="/node"  element={<Node_fun/>}/> */}
         </Switch>
      </Router>
    </div>
  );
}

export default App;
