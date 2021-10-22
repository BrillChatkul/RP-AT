import './Resultpage.css'
function Resultpage(props){
    const{ endPage, PeopleList, NewPeopleList } = props
    const ShowPeople = PeopleList.map((n,i)=><p>{n} วาดของ {NewPeopleList[i]}</p>)
    return(
        <div className='Resulthpage-Container' onClick={()=>{endPage(false)}}>
            <div className='Resulthpage-page'>
                <p>Result</p>
                {ShowPeople}
            </div>
        </div>
    )
}
export default Resultpage