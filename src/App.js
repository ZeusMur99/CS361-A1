// import stylesheet and datasets
import './App.css';
import chocolates from './data/chocolate';
import coffees from './data/coffee';

// import React and Router for webpage navigation
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import navigation components
import Navigation from './components/Navigation.js'
import { FcEnteringHeavenAlive } from 'react-icons/fc'

//import pages
import HomePage from './pages/HomePage.js'
import CoffeeOrderPage from './pages/CoffeeOrderPage.js'
import ChocolateOrderPage from './pages/ChocolateOrderPage.js'
import SignInPage from './pages/SignInPage.js'
import CreateAccount from './pages/CreateAccount.js'

// start app
function App() {  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navigation />
        </header>
        
        <main className="App-display">
          <Route path="/(|index.html)" exact>
            <HomePage />
          </Route>
          <Route path="/coffee">
            <CoffeeOrderPage items={coffees} />
          </Route>
          <Route path="/chocolate">
            <ChocolateOrderPage items={chocolates} />
          </Route>
          <Route path="/signin">
            <SignInPage/>
          </Route>
          <Route path="/create-account">
            <CreateAccount/>
          </Route>
        </main>

        <footer id="footer">
          <p>&copy; 2022 Jesus Murillo</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
