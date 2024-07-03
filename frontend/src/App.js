import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>E-commerce App</h1>
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
