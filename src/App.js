import logo from './logo.svg';
import './App.css';
import Oneverone from './component/Oneverone';
import Listname from './component/Listname';
import { useState } from 'react';

function App() {
  const [showData,setShowData] = useState('No data')
  const [dataArray,setDataArray] = useState([])
  function pushArray(e){
    if(dataArray.length < 12){
    setDataArray([...dataArray, e])}
    else{
      alert('No more than 12.');
    }
  }

  function RemoveName(){
    let copyDataList = [...dataArray];
    if(copyDataList.length>0){
      copyDataList.pop();
      setDataArray(copyDataList);
    }
    else{
      alert('No people in list.')
    }
  }

  const [Page,SetPage] = useState(false)
  function Randompage(){
      SetPage(true);
    
  }
  const showDataArray = dataArray.map((n)=><Listname name={n}/>)
    
  return (
    <div>
    <Oneverone setvalue={pushArray} removeAR={RemoveName}/>
    <div className='App-showData-Contain'>{showDataArray}</div>
    <div className='App-footer-Contain'>
    <button className='Button-random' onClick={Randompage}>Random now!!</button>
    </div>
    {Page==true?<div style={{display:'flex',position:'absolute',backgroundColor:'red',width:'100vw',height:'100vh',zIndex:'1000',left:'0px',top:'0px',animation: 'Fadedown 1s'}}
    onClick={()=>{SetPage(false)}}></div>:null}
    
    </div>

    
  );
}

export default App;
