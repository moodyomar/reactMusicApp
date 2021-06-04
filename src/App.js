import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
// import './css/nav.css';
import Nav from './common/nav';
import SideNav from './common/sideNav';
import MusicApp from './music_app/musicApp';
import Songs from './music_app/songs';


function App() {


  return (
    <div className="App">
      <Router>
        <header>
          <Route path="/" component={Nav} />
        <aside>
        <Route path="/" component={SideNav} />
        </aside>
        </header>
        <main>
          <Switch>

            <Route exact path="/" component={MusicApp} />
            <Route exact path="/songs" component={Songs} />

          </Switch>
        </main>
        <footer>

        </footer>

      </Router>
    </div>
  );
}

export default App;
