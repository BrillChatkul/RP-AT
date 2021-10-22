import logo from './logo.svg';
import './App.css';
import Oneverone from './component/Oneverone';
import Listname from './component/Listname';
import Resultpage from './component/Resultpage';
import { useState } from 'react';

function App() {
  const [showData,setShowData] = useState('No data')
  const [dataArray,setDataArray] = useState([])
  function pushArray(e){
    if(dataArray.length < 12){
      let sameName = false
      for(let a=0;a<dataArray.length;a++){
        if(e===dataArray[a]){
          alert('Same Name!!\nPlease Enter different name.')
          sameName = true
          break
        }
      }
      if (sameName === false){
        setDataArray([...dataArray, e])
      }
    }
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
  const [dataNewArray,setDataNewArray] = useState([])
  function Randompage(){
    if(dataArray.length>1){
      let copyArray = [...dataArray]
      var notsameData = false
      do{
        notsameData = true;
        for(var x = 0;x<copyArray.length;x++){
          var randomIndex = Math.floor(Math.random()*copyArray.length)
          var temp = copyArray[x]
          copyArray[x] = copyArray[randomIndex]
          copyArray[randomIndex] = temp
        }
        for(var x=0;x<copyArray.length;x++){
          if(dataArray[x]==copyArray[x]){
            notsameData = false;
            }
        }
      }while(notsameData == false)
      setDataNewArray([...copyArray])
      SetPage(true);
    }
    else{
      alert('Please Enter more than 1 name before random.')
    }
  }
  function NewRandomPage(){
    setDataArray([])
    setDataNewArray([])
    SetPage(false);
  }
  const showDataArray = dataArray.map((n)=><Listname name={n}/>)
    
  return (
    <div>
    <Oneverone setvalue={pushArray} removeAR={RemoveName}/>
    <div className='App-showData-Contain'>{showDataArray}</div>
    <div className='App-footer-Contain'>
    <button className='Button-random' onClick={Randompage}>Random now!!</button>
    </div>
    {Page==true?<Resultpage endPage={SetPage} NewRandom={NewRandomPage} PeopleList={dataArray} NewPeopleList={dataNewArray}></Resultpage>:null}
    
    </div>

    
  );
}

export default App;
