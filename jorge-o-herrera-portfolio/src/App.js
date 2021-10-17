import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import { Route, Switch } from 'react-router-dom'
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact-me'>
          <Contact />
        </Route>

      </Switch>
    </Layout>

  );
}

export default App;
