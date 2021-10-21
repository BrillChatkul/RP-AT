import './Listname.css'
function Listname(props){
    const {name} = props
    return(
        <div className='Listname-container'>
            {name}
        </div>

    )
}
export default Listname;