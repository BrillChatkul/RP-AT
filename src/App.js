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
  const showDataArray = dataArray.map((n)=><Listname name={n}/>)
    
  return (
    <div className='App'>
    <Oneverone setvalue={pushArray} removeAR={RemoveName}/>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>{showDataArray}</div>
    </div>
  );
}

export default App;
