import './Resultpage.css'
function Resultpage(props){
    const{ endPage, PeopleList, NewPeopleList,NewRandom } = props
    const ShowPeople = PeopleList.map((n,i)=><p><span style={{color:'#FF6666',fontWeight:'bold'}}>{n} </span>
    วาดของ <span style={{fontStyle:'italic',textDecoration:'underline'}}>{NewPeopleList[i]}</span> </p>)
    return(
        <div className='Resultpage-Container'>
            <div className='Resultpage-page'>
                <p className='Resultpage-header'>RESULT</p>
                <div className='Resultpage-line'></div>
                <br/>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'80%',overflowY:'scroll'}}>
                {ShowPeople}
                </div>
                <br/>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button className='RE-Button-random' onClick={()=>{NewRandom()}}>New random</button>
                    <button className='RE-Button-random' onClick={()=>{
                        var checkConfirm = window.confirm('Close result?\n***Close will not this save result.')
                        if (checkConfirm == true){
                        endPage(false)}}}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Resultpage