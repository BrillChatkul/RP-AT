import './Resultpage.css'
function Resultpage(props){
    const{ endPage, PeopleList, NewPeopleList,NewRandom } = props
    const ShowPeople = PeopleList.map((n,i)=><p><span style={{color:'#FF6666',fontWeight:'bold'}}>{n} </span>
    วาดของ <span style={{fontStyle:'italic',textDecoration:'underline'}}>{NewPeopleList[i]}</span> </p>)
    return(
        <div className='Resulthpage-Container'>
            <div className='Resulthpage-page'>
                <p style={{backgroundColor:'#FF6666',padding:'30px',color:'white',borderRadius:'30px'}}>RESULT</p>
                <div style={{backgroundColor:'#FF6666',width:'80%',height:'5px',borderRadius:'2px'}}></div>
                <br/>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'80%',overflowY:'scroll'}}>
                {ShowPeople}
                </div>
                <br/>
                <div>
                    <button className='Button-random' onClick={()=>{NewRandom()}}>New Random</button>
                    <button className='Button-random' onClick={()=>{endPage(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Resultpage