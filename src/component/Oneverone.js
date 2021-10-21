import './Oneverone.css'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Oneverone(props) {
  const{ setvalue,removeAR } = props
  const [name,setName] = useState('')
  function CheckEnter(e){
    if(e.key === 'Enter'){
      document.getElementById('buttonRandom').click()
    }
  }
  function onChangeName(e){
    setName(e.target.value)
  }
  function SentName(){
    if(name === ''){
      alert('please enter name.')
    }
    else{
    setvalue(name)
      setName('')}
  }
  return (
       
        <div className='Container-1v1'>
          <p style={{color:'white',fontSize:'64px',fontWeight:'bold'}}>1v1</p>
          <p style={{color:'white',fontSize:'36px'}}>Enter Name</p>
          <input className='Input-name' type='text' value={name} onKeyDown={((e)=>{CheckEnter(e)})} maxLength='20' onChange={(e)=>{onChangeName(e)}}></input>
          <br/>
          <div>
          <button id='buttonRandom' className='Button-random' style={{width:'200px',textAlign:'center'}} onClick={(e)=>{SentName(e)}}>Enter</button>
          <button className='Button-random' style={{width:'200px',textAlign:'center'}} onClick={(e)=>{removeAR()}}>Remove</button></div>
          {/* {name != ''?<p>{name}</p>:null} */}
        </div>
            
      
    );
  }
  
  export default Oneverone;