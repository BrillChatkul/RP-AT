import './Resultpage.css'
function Resultpage(props){
    const{ endPage, PeopleList, NewPeopleList,NewRandom } = props
    const ShowPeople = PeopleList.map((n,i)=><div style={{display:'flex',justifyContent:'space-around'}}>
        <p className='Oldname'>{n}</p>
        <p>-วาดของ-</p>
        <p className='Newname'>{NewPeopleList[i]}</p> 
        </div>)
    return(
        <div className='Resultpage-Container'>
            <div className='Resultpage-page'>
                <p className='Resultpage-header'>RESULT</p>
                <div className='Resultpage-line'></div>
                <br/>
                <div style={{display:'flex',flexDirection:'column',width:'80%',overflowY:'scroll'}}>
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