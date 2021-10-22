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
          <p className='Oneverone-topic'>1v1</p>
          <p className='Oneverone-font'>Enter Name</p>
          <input className='Input-name' type='text' value={name} onKeyDown={((e)=>{CheckEnter(e)})} maxLength='15' onChange={(e)=>{onChangeName(e)}}></input>
          <br/>
          <div>
          <button id='buttonRandom' className='Oneverone-button' onClick={(e)=>{SentName(e)}}>Enter</button>
          <button className='Oneverone-button' onClick={(e)=>{removeAR()}}>Remove</button></div>
          {/* {name != ''?<p>{name}</p>:null} */}
        </div>
            
      
    );
  }
  
  export default Oneverone;