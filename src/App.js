import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card planName="Free" price="0" users=" Single User" storage="50GB Storage" project="Unlimited Public Projects" access="Community Access" project2="Unlimited Private Projects" support="Dedicated Phone Support" sub="Free Subdomain" report="Monthly Status Report"/>
        <Card planName="Plus" price="9" users="5 Users" storage="50GB Storage" project="Unlimited Public Projects" access="Community Access" project2="Unlimited Private Projects" support="Dedicated Phone Support" sub="Free Subdomain" report="Monthly Status Report"/>
        <Card planName="Pro" price="49" users="Unlimited Users" storage="50GB Storage" project="Unlimited Public Projects" access="Community Access" project2="Unlimited Private Projects" support="Dedicated Phone Support" sub="Free Subdomain" report="Monthly Status Report"/>
        <h1>Hi</h1>
     <i className="bi-alarm"></i>
        <button
        type='button'
        className="w-100 btn btn-danger">BUTTON</button>
          </div>
          </div>




      




    
      
    
    // <div className="App">
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
