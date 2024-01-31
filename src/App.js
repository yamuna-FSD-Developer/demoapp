import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';


function App(){
  return (
    <div id='root'>
       <div>
          <h1 style={{textAlign:"center"}}> REACT PRICE TAG</h1>
        </div>
    
      <div class="container">
            <div class="row bg-primary">
               <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5 ml-2 mr-2-4">
                 <div className="card border mb-4 box-shadow">
                    <div className="card-header text-center"><h3> FREE</h3>
        <h2>
          $ 0/month
        </h2>
        </div>
        <div className='card-body'>
        <ul className="list-unstyled mt-3 mb-4">
          <li> <i className="bi bi-check"></i>Single user</li>
          <li> <i className="bi bi-check"></i>50GB Storage</li>
          <li> <i className="bi bi-check"></i>Community Access</li>
          <li className='text-muted'> <i className="bi bi-x"></i>Unlimited private projects</li>
          <li className='text-muted'> <i className="bi bi-x"></i>Dedicated phone Support</li>
          <li className='text-muted'> <i className="bi bi-x"></i>free subdomain</li>
          <li className='text-muted'> <i className="bi bi-x"></i>Monthly status Reports</li>
        </ul>

        <button
        type='button'
        className="w-100 btn btn-lg btn-primary" disabled>BUTTON</button>

      </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5 ml-2 mr-2">
      <div className="card border mb-4 box-shadow">
        <div className='card-header text-center'><h3> PLUS</h3>
        <h2>
          $ 9/month
        </h2>
        </div>
        <div className='card-body'>
        <ul className="list-unstyled mt-3 mb-4">
          <li> <i className="bi bi-check"></i>Single user</li>
          <li> <i className="bi bi-check"></i>50GB Storage</li>
          <li> <i className="bi bi-check"></i>Community Access</li>
          <li> <i className="bi bi-check"></i>Unlimited private projects</li>
          <li> <i className="bi bi-check"></i>Dedicated phone Support</li>
          <li> <i className="bi bi-check"></i>free subdomain</li>
          <li className='text-muted'> <i className="bi bi-x"></i>Monthly status Reports</li>
        </ul>

        <button
        type='button'
        className=" w-100 btn btn-lg btn-primary "disabled>BUTTON</button>

        </div>
        </div>
        </div>
        

        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5 ml-2 mr-2-4">
           <div className="card border">
        <div className='card-header text-center'><h3> PRO</h3>
        <h2>
          $ 49/month
        </h2>
        </div>
        <div className='card-body'>
        <ul className="list-unstyled mt-3 mb-4">
          <li> <i className="bi bi-check"></i>Single user</li>
          <li> <i className="bi bi-check"></i>50GB Storage</li>
          <li> <i className="bi bi-check"></i>Community Access</li>
          <li> <i className="bi bi-check"></i>Unlimited private projects</li>
          <li> <i className="bi bi-check"></i>Dedicated phone Support</li>
          <li> <i className="bi bi-check"></i>free subdomain</li>
          <li className="bi bi-check">Monthly status Reports</li>
        </ul>

        <button
        type='button'
        className=" w-100 btn btn-lg btn-primary ">BUTTON</button>

        </div>
        </div>
        </div>
      
      
        
     
          </div>
          </div>
          </div>
          
          
  )
}

export default App;



