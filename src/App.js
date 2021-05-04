import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import ZooAdminSadab from './Components/ZooAdminSadab/ZooAdminSadab';
import ZooExam from './Components/ZooExam/ZooExam';
import BoAdminSadab from './Components/BoAdminSadab/BoAdminSadab';
import BoExam from './Components/BoExam/BoExam';
function App() {
      return (
        <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/zooadminsadab">
                <ZooAdminSadab />
              </Route>
              <Route path="/boadminsadab">
                <BoAdminSadab />
              </Route>

               <Route path="/zooexamupdate/:id">
                <ZooExam />
              </Route>
              <Route path="/boexamupdate/:id">
                <BoExam />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
      );
    
}

export default App;
