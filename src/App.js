import logo from './logo.svg';
// import './App.css';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// Styles
import { GlobalStyle } from './GlobalStyle';
import FontStyles from './fontStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <FontStyles />
      {/* <Header /> */}
      <Home />
      {/* <Footer /> */}
    </>
    // <div className="App">
    //   <GlobalStyle />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
