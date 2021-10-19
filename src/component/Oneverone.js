import './Oneverone.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Oneverone() {
    return (
       
        <div className='Container-1v1'>
          <p>1v1</p>
          <p>Enter Name</p>
          <div style={{display:'inline-block'}}>
            <input style={{width:'20vw'}}></input>
          </div>
          <br/>
          <Button>Random now!</Button>
  
        </div>
            
      
    );
  }
  
  export default Oneverone;